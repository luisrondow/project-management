import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { useHistory } from "react-router-dom";

function ProjectCard({ id, title }) {
  const history = useHistory();

  const property = {
    imageUrl:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1353&q=80",
    imageAlt: title,
  };

  return (
    <Box
      maxW="md"
      mb={"4rem"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={() => history.push(`/board/${id}`)}
      sx={{
        width: "40%",
      }}
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Box p="3">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          sx={{
            fontSize: "14px",
          }}
        >
          {title}
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectCard;
