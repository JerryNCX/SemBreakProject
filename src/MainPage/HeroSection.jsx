import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
  Image,
  Center,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import LinePattern from "../assets/Image/Element.svg";

export default function HeroSection() {
  return (
    <>
      <Flex px="7%" py="3%" className="container" flexDir="row">
        <Flex flexDir="column" maxW="50%" gap="2">
          <Box fontSize="65px" fontFamily={"body"} flex={5/10}>
            Get More Done With whitespace
          </Box>
          <Box flex={3/10} maxW="70%">
          Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
          </Box>
          <Box flex={1/10}>
            <Button bg="#57B9FF" color="white" size="xl">
              Try Whitespace free
            </Button>
          </Box>
        </Flex>

        <Flex maxW="50%">
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
