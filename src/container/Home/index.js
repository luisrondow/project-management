import * as React from "react";
import { Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import ProjectNamePopover from "../../components/ProjectNamePopover";
import Projects from "../../components/Projects";
import firebase from "../../services/firestore";

function Home() {
  const [projects, setProjects] = React.useState([]);
  const [isOpenPopover, setIsOpenPopover] = React.useState(false);

  React.useEffect(() => {
    const db = firebase.firestore();

    db.collection("projects")
      .get()
      .then((querySnapshot) => {
        const projects = [];
        querySnapshot.forEach((doc) => {
          projects.push({ id: doc.id, title: doc.data().title });
        });

        setProjects([...projects]);
      });
  }, []);

  const handleAddProject = (title) => {
    const db = firebase.firestore();

    db.collection("projects")
      .add({
        title,
      })
      .then((docRef) => {
        setProjects([...projects, { id: docRef.id, title }]);
        setIsOpenPopover(false);
      })
      .catch((err) => {
        console.err(err);
      });
  };

  return (
    <Flex
      p={8}
      sx={{
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Flex
        sx={{
          alignItems: "center",
        }}
      >
        <Text
          mr={8}
          mb={8}
          as="h1"
          sx={{
            fontWeight: "600",
            fontSize: "60px",
          }}
        >
          Hello Human!
        </Text>
        <ProjectNamePopover
          isOpen={isOpenPopover}
          setIsOpen={setIsOpenPopover}
          handleProjectName={handleAddProject}
        />
      </Flex>
      {projects.length > 0 ? (
        <Projects projects={projects} />
      ) : (
        <Text
          as="h2"
          sx={{
            fontWeight: "600",
            fontSize: "40px",
          }}
        >
          No Projects Avaible!
        </Text>
      )}
    </Flex>
  );
}

export default Home;
