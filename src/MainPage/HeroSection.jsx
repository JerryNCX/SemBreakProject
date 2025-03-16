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
} from "@chakra-ui/react";
import React from "react";
import LinePattern from "../assets/Image/Element.svg";

export default function HeroSection() {
  return (
    <>
      <Flex px="7%" py="3%">
        <Box flex="1/2" order={0}>
          <Stack align="start" textAlign="left" h="100%" justify="space-between" py="4%">
            <Box fontSize="65px" fontFamily={"body"}>
              Get More Done With whitespace
            </Box>
            <Box>
              <Button bg="#57B9FF" color="white" size="xl">
                Try Whitespace free
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box flex="1/2" order={1} scale="auto">
          <Image
            src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            w="100%"
            maxW="600px"
          />
        </Box>
      </Flex>
    </>
  );
}
