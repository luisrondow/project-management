import * as React from "react";
import { Flex } from "@chakra-ui/layout";
import Header from "../../components/Header";
import List from "../../components/List";
import { DragDropContext } from "react-beautiful-dnd";
import {
  findCardsByColumnId,
  findColumnById,
  findCardById,
  findCardIndexById,
} from "../../utils/finders";
import CreateModal from "../../components/CreateModal";
import TaskModal from "../../components/TaskModal";
import Card from "../../components/Card";
import firebase from "../../services/firestore";
import { useParams } from "react-router";

function Board() {
  const params = useParams();
  const [lists, setLists] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [isOpenCreateModal, setIsOpenCreateModal] = React.useState(false);
  const [isTaskCreateModal, setIsTaskCreateModal] = React.useState(false);
  const [task, setTask] = React.useState({
    title: "",
    content: "",
  });

  React.useEffect(() => {
    const db = firebase.firestore();

    db.collection("columns")
      .get()
      .then((querySnapshot) => {
        const columns = [];
        querySnapshot.forEach((doc) => {
          const { title, creatable } = doc.data();
          columns.push({ id: doc.id, title, creatable });
        });
        setLists([...columns]);

        db.collection("cards")
          .where("project_id", "==", params?.id)
          .get()
          .then((querySnapshot) => {
            const cards = [];
            querySnapshot.forEach((doc) => {
              const { title, content, column_id } = doc.data();
              cards.push({ id: doc.id, title, content, column_id });
            });

            setCards([...cards]);
          });
      });
  }, [params?.id]);

  const onDragEnd = React.useCallback(
    (result) => {
      const db = firebase.firestore();
      const { destination, source, draggableId } = result;

      if (source && destination) {
        if (source.droppableId === destination.droppableId) {
          const items = findCardsByColumnId(cards, source.droppableId);
          const item = findCardById(items, draggableId);
          const newCards = cards;

          newCards.splice(source.index, 1);
          newCards.splice(destination.index, 0, item);

          setCards([...newCards]);
        } else {
          const destinationColumn = findColumnById(
            lists,
            destination.droppableId
          );
          const items = findCardsByColumnId(cards, source.droppableId);
          const item = findCardById(items, draggableId);

          const newCards = cards;
          const newItem = { ...item, column_id: destinationColumn.id };

          newCards.splice(source.index, 1);
          newCards.splice(destination.index, 0, newItem);

          setCards([...newCards]);
          db.collection("cards")
            .doc(draggableId)
            .update(newItem)
            .then(() => {
              console.log("Successfully updated!");
            });
        }
      }
    },
    [lists, cards]
  );

  const handleTaskCreate = (title, description) => {
    const db = firebase.firestore();

    db.collection("cards")
      .add({
        title,
        content: description,
        project_id: params.id,
        column_id: "JW0JZ6Tqys7rJkaxGn8m",
      })
      .then((docRef) => {
        const id = docRef.id;
        setCards([
          ...cards,
          {
            id,
            title,
            content: description,
            project_id: params.id,
            column_id: "JW0JZ6Tqys7rJkaxGn8m",
          },
        ]);
        setIsOpenCreateModal(false);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const handleDescriptionModal = (task) => {
    setTask({ ...task });
    setIsTaskCreateModal(true);
  };

  const handleDeleteCard = (id) => {
    const db = firebase.firestore();

    db.collection("cards")
      .doc(id)
      .delete()
      .then(() => {
        const index = findCardIndexById(cards, id);
        const newCards = cards;

        newCards.splice(index, 1);

        setIsTaskCreateModal(false);
        setCards([...newCards]);
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Header />
      <Flex
        p="4"
        sx={{
          height: "calc(100% - 80px)",
        }}
      >
        {lists.map((list, index) => (
          <List
            index={index}
            key={list.title}
            id={list.id}
            title={list.title}
            creatable={list.creatable}
            cards={list.cards}
            setIsOpenCreateModal={setIsOpenCreateModal}
          >
            {cards.map((card, index) => {
              if (card.column_id === list.id) {
                return (
                  <Card
                    key={card.id}
                    card={card}
                    position={index}
                    openDescritpionModal={handleDescriptionModal}
                  />
                );
              } else {
                return null;
              }
            })}
          </List>
        ))}
      </Flex>
      <CreateModal
        isOpen={isOpenCreateModal}
        setIsOpen={setIsOpenCreateModal}
        onCreate={handleTaskCreate}
      />
      <TaskModal
        isOpen={isTaskCreateModal}
        setIsOpen={setIsTaskCreateModal}
        task={task}
        handleDeleteTask={handleDeleteCard}
      />
    </DragDropContext>
  );
}

export default Board;
