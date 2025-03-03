import {
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../components/ui/accordion";

const HeadTitle = [
  { value: "0", title: "Product" },
  { value: "1", title: "Solution" },
  { value: "2", title: "Resource" },
  { value: "3", title: "Pricing" },
];

export default function MainPage() {
  return (
    <>
      <Container bg="blue">
        <Heading maxW="20%">
          <AccordionRoot collapsible>
            <HStack>
              <Image
                src="https://cdn-icons-png.flaticon.com/512/4156/4156292.png"
                w="50%"
              />
              WhiteSpace
              {HeadTitle.map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionItemTrigger value={item.value}>
                    {item.title}
                  </AccordionItemTrigger>
                  <AccordionItemContent></AccordionItemContent>
                </AccordionItem>
              ))}
            </HStack>
          </AccordionRoot>
        </Heading>
      </Container>
    </>
  );
}
