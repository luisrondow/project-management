import { Flex } from "@chakra-ui/layout";
import ProjectCard from "../ProjectCard";

function Projects({ projects }) {
  return (
    <Flex
      sx={{
        width: "70%",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {projects.map((project) => (
        <ProjectCard id={project.id} title={project.title} />
      ))}
    </Flex>
  );
}

export default Projects;
