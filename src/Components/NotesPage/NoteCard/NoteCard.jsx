import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNotes, updateNotes } from "../../../Redux/Notes/note.actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { store } from "../../../Redux/store";

const NoteCard = ({ title, body, user, _id }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [temptitle, setTitle] = useState(title);
  const [tempbody, setBody] = useState(body);
  const { token } = store.getState().userReducer;

  const updateNote = () => {
    dispatch(updateNotes(_id, { title: temptitle, body: tempbody },token));
     onClose()
  };

  return (
    <Card backgroundColor={"yellowgreen"}>
      <CardBody>
        <VStack>
          <Heading>{title}</Heading>
          <Text>{body}</Text>
          <Flex m={8}>
            <>
              <Button onClick={onOpen}>Update</Button>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Update Note</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <Input
                      value={temptitle}
                      placeholder="Please Enter Title"
                      onChange={(e) => setTitle(e.target.value)}
                    ></Input>
                    <Textarea
                      mt={8}
                      value={tempbody}
                      placeholder="Description..."
                      onChange={(e) => setBody(e.target.value)}
                    ></Textarea>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={updateNote}>
                      Update
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
            <Button
              marginLeft={3}
              onClick={() => {
                dispatch(deleteNotes(_id, token));
              }}
            >
              Delete
            </Button>
          </Flex>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default NoteCard;
