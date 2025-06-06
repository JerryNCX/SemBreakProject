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
import Logo from "../assets/Image/Logo Icon.svg";
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
        <Flex align="center">
          <Image src={Logo} maxW="100%" objectFit="contain" />
          <Text fontSize="3xl" fontWeight="bold" pl="5">
            WhiteSpace
          </Text>
        </Flex>
        <Flex>
          <AccordionRoot collapsible>
            <HStack gap="4">
              {HeadTitle.map((item, index) => (
                <AccordionItem key={index} value={item.value}>
                  <AccordionItemTrigger bgColor="black">
                    {item.title}
                  </AccordionItemTrigger>
                  <AccordionItemContent>{item.content}</AccordionItemContent>
                </AccordionItem>
              ))}
            </HStack>
          </AccordionRoot>
        </Flex>
        <Flex gap="3">
          <Button>Login</Button>
          <Button>
            <Container>
              <HStack>
                Try Whitespace Free
                <Image src={RightArrow} maxW="20%" />
              </HStack>
            </Container>
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
