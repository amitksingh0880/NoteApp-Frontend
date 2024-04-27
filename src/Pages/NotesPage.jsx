import { Box, Button, Grid, IconButton, Input, Textarea, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNotes, getNotes } from "../Redux/Notes/note.actions";
import NoteCard from "../Components/NotesPage/NoteCard/NoteCard";
import { IoIosAddCircle } from "react-icons/io";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
const NotesPage = () => {
  const { data } = useSelector((state) => state.noteReducer);
  // console.log(data);
  const dispatch = useDispatch();
  const [notes, setNotes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [title, setTitle] = useState("")
  const [body , setBody] = useState("")

  useEffect(() => {
    dispatch(getNotes());
  }, []);
  useEffect(() => {
    setNotes(data);
  }, [data]);

  const createNote= ()=>{
            dispatch(createNotes({title,body}))
            onClose()
  }
  return (
    <Box mt={20} padding={8}>
      <Grid
        gap={10}
        w={"90%"}
        margin={"auto"}
        gridTemplateColumns={"repeat(4, 1fr)"}
      >
        {notes?.map((el) => (
          <NoteCard {...el} />
        ))}
      </Grid>
      <IconButton
        position={"fixed"}
        bottom={0}
        right={0}
        w={20}
        h={20}
        borderRadius={50}
        bg={"yellowgreen"}
        margin={14}
        onClick={onOpen}
        icon={<IoIosAddCircle />}
      ></IconButton>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
             <Input value={title} placeholder="Please Enter Title" onChange={(e)=>setTitle(e.target.value)}></Input>
             <Textarea mt={8} value={body} placeholder="Description..." onChange={(e)=>setBody(e.target.value)}></Textarea>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={createNote}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default NotesPage;
