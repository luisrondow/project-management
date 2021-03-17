import { Button } from "@chakra-ui/button";
import { ModalFooter } from "@chakra-ui/modal";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";

function TaskModal({ isOpen, setIsOpen, task, handleDeleteTask }) {
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
          {task?.title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          sx={{
            fontSize: "16px",
          }}
        >
          {task?.content}
        </ModalBody>

        <ModalFooter>
          <Button
            variant="error"
            onClick={() => handleDeleteTask(task.id)}
            size="md"
            width="3xs"
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default TaskModal;
