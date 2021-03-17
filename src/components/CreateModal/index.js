import { Button } from "@chakra-ui/button";
import { FormLabel, FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Textarea } from "@chakra-ui/textarea";
import { useState } from "react";

function CreateModal({ isOpen, setIsOpen, onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      size="3xl"
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent p={4}>
        <ModalHeader
          sx={{
            fontSize: "32px",
          }}
        >
          Create your task
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
              }}
            >
              Title
            </FormLabel>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              sx={{
                fontSize: "16px",
                padding: "2rem 1rem",
              }}
            />
          </FormControl>

          <FormControl mt={8}>
            <FormLabel
              sx={{
                fontSize: "16px",
              }}
            >
              Description
            </FormLabel>
            <Textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              rows={4}
              sx={{
                fontSize: "16px",
                padding: "1rem",
              }}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={() => onCreate(title, description)}>
            Save
          </Button>
          <Button variant="error" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CreateModal;
