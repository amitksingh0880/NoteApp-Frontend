import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../Components/Homepage/Navbar";
import note from "../assets/note.png";

const HomePage = () => {
  return (
    <Box padding={8}>
      <Image position={"absolute"} mt={12} right={0} w={500} src={note} />
      <Heading size={"4xl"} textAlign={"start"} mt={16}>
        Note App
      </Heading>
      <Text textAlign={"justify"} maxW={"50%"} mt={"10%"}>
          Welcome to our note-taking web application, your ultimate tool for
          organizing your thoughts, tasks, and ideas seamlessly. With our
          intuitive interface, you can create, edit, and manage your notes
          effortlessly. Whether you're jotting down quick reminders,
          brainstorming project ideas, or keeping track of important
          information, our app is designed to streamline your workflow. Stay
          organized, stay productive, and unleash your creativity with our
          note-taking web app.
      </Text>
    </Box>
  );
};

export default HomePage;
