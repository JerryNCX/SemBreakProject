import { Box, Button, Container, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <Flex bg="cyan.700">
        <Stack align="start">
        <Text fontSize="4xl">Get More Done With</Text>
        <Text fontSize="4xl">whitespace</Text>
        <Button bg="blue" color="white" mt="15%">Try Whitespace free</Button>
        </Stack>
      </Flex>
    </>
  );
}
