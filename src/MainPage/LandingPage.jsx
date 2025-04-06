import React from "react";
import Header from "./Header";
import { Box, Flex, Stack } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import LinePattern from "../assets/Image/Element.svg";
import background from "../assets/Image/BACKGROUND.svg";
import WorkManagement from "./WorkManagement";

export default function LandingPage() {
  return (
    <>
      <Box top="0" left="0" right="0" w="100vw" bgColor="#043873">
        <Header />
        <Flex
          bgImage={`url(${LinePattern})`}
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <HeroSection />
        </Flex>
        <Flex
          color="black"
          bgColor="white"
          bgRepeat="no-repeat"
          bgImage={`url(${background})`}
          bgSize="cover"
        >
          <WorkManagement />
        </Flex>
      </Box>
    </>
  );
}
