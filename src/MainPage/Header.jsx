import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import RightArrow from "../assets/Image/reshot-icon-arrow-right-GKTFPJDL97.svg";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../components/ui/accordion";

const HeadTitle = [
  { value: "0", title: "Product", content: "Lalala" },
  { value: "1", title: "Solution", content: "Lalala" },
  { value: "2", title: "Resource", content: "Lalala" },
  { value: "3", title: "Pricing", content: "Lalala" },
];

export default function Header() {
  return (
    <>
      <Flex h="100px" align="center" px="10" justify="space-between">
        <Flex align="center" flex="1">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/4156/4156292.png"
            maxW="100%"
            w={["50px","75px","100px"]}
            objectFit="contain"
          />
          <Text fontSize="3xl" fontWeight="bold" pl="5">
            WhiteSpace
          </Text>
        </Flex>
        <Box flex="1">
          <AccordionRoot collapsible>
            <HStack>
              {HeadTitle.map((item, index) => (
                <AccordionItem key={index} value={item.value}>
                  <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                  <AccordionItemContent>{item.content}</AccordionItemContent>
                </AccordionItem>
              ))}
            </HStack>
          </AccordionRoot>
        </Box>
        <Box flex="1">
          <Button color="white">Login</Button>
          <Button bg="white">
            <Container>
              <HStack>
                Try Whitespace Free
                <Image src={RightArrow} maxW="20%" />
              </HStack>
            </Container>
          </Button>
        </Box>
      </Flex>
    </>
  );
}
