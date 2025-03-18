import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import RightArrow from "../assets/Image/reshot-icon-arrow-right-GKTFPJDL97.svg";
import background from "../assets/Image/BACKGROUND.svg"
import React from "react";

export default function WorkManagement() {
  return (
    <>
      <Flex px="10%" py="7%" flexDir="row">
        <Flex flexDir="column" maxW="60%" gap="1">
          <Box fontSize="70px" fontFamily="monospace" flex={5 / 10} w="70%">
            Project Management
          </Box>
          <Box flex={3 / 10} maxW="90%">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </Box>
          <Box flex={2 / 10}>
            <Button bg="#57B9FF" color="white" size="lg">
              Get Started
              <Image src={RightArrow} maxW="20%" />
            </Button>
          </Box>
        </Flex>

        <Flex maxW="40%">
          <Box>
            <Image
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              w="100%"
              maxW="600px"
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
