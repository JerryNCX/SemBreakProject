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
} from "@chakra-ui/react";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <Flex bg="cyan.700">
        <HStack gap="">
          <Stack align="start">
            <Text fontSize="4xl">Get More Done With</Text>
            <Text fontSize="4xl">whitespace</Text>
            <Button bg="blue" color="white" mt="15%">
              Try Whitespace free
            </Button>
          </Stack>

          <Box>
            <Image
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              w="50%"
              float="right"
            />
          </Box>
        </HStack>
      </Flex>
    </>
  );
}
