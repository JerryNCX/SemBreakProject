import { Box, Container, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <Flex bg="cyan.700">
        <Stack align="start">
        <Text>Get More Done With</Text>
        <Text>whitespace</Text>
        </Stack>
      </Flex>
    </>
  );
}
