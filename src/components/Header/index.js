import { Flex, Heading } from "@chakra-ui/layout";

function Header() {
  return (
    <Flex
      px="4"
      sx={{
        height: "80px",
        background: "#FF3874",
        color: "#FFF",
        alignItems: "center",
      }}
    >
      <Heading as="h1">Board</Heading>
    </Flex>
  );
}

export default Header;
