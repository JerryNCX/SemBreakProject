import React from "react";
import Header from "./Header";
import { Box, Flex, Stack } from "@chakra-ui/react";
import HeroSection from "./HeroSection";

export default function LandingPage() {
  return (
    <>
      <Box position="fixed" top="0" left="0" right="0" w="100vw" h="100vh">
        <Box bg="blue" zIndex="1000">
          <Header />
        </Box>
        <Box bg="cyan.700" display="flex" alignItems="center" justifyContent="center">
          <HeroSection />
        </Box>
      </Box>
    </>
  );
}
