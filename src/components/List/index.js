import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { Text, Flex } from "@chakra-ui/layout";
import { Droppable } from "react-beautiful-dnd";

function List({
  id,
  title,
  creatable,
  children,
  index,
  cards,
  setIsOpenCreateModal,
}) {
  return (
    <Flex
      px="2"
      sx={{
        height: "100%",
        flexGrow: "0",
        flexShrink: "0",
        flexBasis: "320px",
        flexDirection: "column",

        "& + div": {
          borderLeft: "1px solid rgba(0, 0, 0, 0.05)",
        },
      }}
    >
      <Flex
        mb="4"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          height: "42px",
        }}
      >
        <Text
          as="h2"
          px="1"
          sx={{
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          {title}
        </Text>
        {creatable && (
          <Button
            onClick={() => setIsOpenCreateModal(true)}
            sx={{
              width: "20%",
            }}
          >
            &#43;
          </Button>
        )}
      </Flex>
      <Droppable droppableId={id} key={index}>
        {({ innerRef, placeholder, droppableProps }) => (
          <Box
            {...droppableProps}
            ref={innerRef}
            sx={{
              minHeight: "300px",
            }}
          >
            {children}
            {placeholder}
          </Box>
        )}
      </Droppable>
    </Flex>
  );
}

export default List;
