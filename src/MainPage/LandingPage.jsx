import React from "react";
import Header from "./Header";
import { Flex, Stack } from "@chakra-ui/react";
import HeroSection from "./HeroSection";

export default function () {
  return (
    <>
      <Stack>
        <Flex position="fixed" top="0" left="0" zIndex="1000">
          <Header />
        </Flex>
        <Flex position="center">
          <HeroSection />
        </Flex>
      </Stack>
    </>
  );
}
