import * as React from "react";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { FormLabel, FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverCloseButton,
} from "@chakra-ui/popover";
import { PopoverTrigger } from "@chakra-ui/popover";
import { Stack } from "@chakra-ui/layout";

const Form = ({ handleTitle, onCancel }) => {
  const [title, setTitle] = React.useState("");

  return (
    <Stack spacing={8}>
      <FormControl>
        <FormLabel htmlFor="title" fontSize="large">
          Title
        </FormLabel>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          fontSize="medium"
          sx={{
            padding: "2rem 1rem",
          }}
        />
      </FormControl>
      <ButtonGroup d="flex" justifyContent="flex-end">
        <Button
          fontSize="medium"
          variant="outline"
          onClick={() => {
            onCancel();
            setTitle("");
          }}
        >
          Cancel
        </Button>
        <Button
          fontSize="medium"
          onClick={() => {
            handleTitle(title);
            setTitle("");
          }}
        >
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

function ProjectNamePopover({ isOpen, setIsOpen, handleProjectName }) {
  return (
    <Popover
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button width="96" onClick={() => setIsOpen(true)}>
          + New Project
        </Button>
      </PopoverTrigger>
      <PopoverContent p={5}>
        <PopoverArrow />
        <PopoverCloseButton />
        <Form
          handleTitle={handleProjectName}
          onCancel={() => setIsOpen(false)}
        />
      </PopoverContent>
    </Popover>
  );
}

export default ProjectNamePopover;
