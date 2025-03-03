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

export default function MainPage() {
  return (
    <>
      <Flex justify="center" bg="blue" h="100px" pt="20px">
        <AccordionRoot collapsible>
          <HStack>
            <Flex>
              <Image
                src="https://cdn-icons-png.flaticon.com/512/4156/4156292.png"
                w="25%"
                pl="5"
              />
              <Text fontSize="3xl" fontWeight="bold" alignSelf="center" pl="5">
                WhiteSpace
              </Text>
            </Flex>

            {HeadTitle.map((item, index) => (
              <AccordionItem key={index} value={item.value}>
                <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                <AccordionItemContent>{item.content}</AccordionItemContent>
              </AccordionItem>
            ))}

            <Flex gap="1" pr="5">
              <Button color="white">Login</Button>
              <Button bg="white">
                <Container>
                  <HStack>
                    Try Whitespace Free
                    <Image src={RightArrow} maxW="20%" />
                  </HStack>
                </Container>
              </Button>
            </Flex>
          </HStack>
        </AccordionRoot>
      </Flex>
    </>
  );
}
