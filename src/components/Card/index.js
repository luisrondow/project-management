import { Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Draggable } from "react-beautiful-dnd";

function Card({ card, position, openDescritpionModal }) {
  return (
    <Draggable draggableId={`${card.id}`} index={position}>
      {({ innerRef, draggableProps, dragHandleProps }, { isDragging }) => (
        <Flex
          ref={innerRef}
          p="5"
          onClick={() => openDescritpionModal(card)}
          sx={{
            background: "#fff",
            borderRadius: "5px",
            marginBottom: "10px",
            boxShadow: "0 1px 4px 0 rgba(192, 208, 230, 0.8)",
            borderTop: "16px solid rgba(230, 236, 245, 0.4)",
            ...(isDragging && {
              borderRadius: 0,
              background: "transparent",
            }),
            ...draggableProps.style,
          }}
          {...draggableProps}
          {...dragHandleProps}
        >
          <Text
            as="p"
            sx={{
              fontSize: "14px",
              fontWeight: "700",
              lineHeight: "20px",
            }}
          >
            {card.title}
          </Text>
        </Flex>
      )}
    </Draggable>
  );
}

export default Card;
