import React from "react";
import Header from "./Header";
import { Box, Flex, Stack } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import LinePattern from "../assets/Image/Element.svg";

export default function LandingPage() {
  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        w="100vw"
        h="100vh"
        bgColor="#043873"
      >
        <Header />
        <Flex bgImage={`url(${LinePattern})`} >
          <HeroSection />
        </Flex>
      </Box>
    </>
  );
}
