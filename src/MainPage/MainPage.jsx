import { Container } from '@chakra-ui/react';
import React from 'react'
import { AccordionItemTrigger, AccordionRoot } from '../components/ui/accordion';

export default function MainPage() {
  return (
 <>
 <Container>
    <AccordionRoot>
        <AccordionRoot.Item>Accordion Item 1</AccordionRoot.Item>
        <AccordionRoot.Item>Accordion Item 2</AccordionRoot.Item>
        <AccordionItemTrigger></AccordionItemTrigger>
    </AccordionRoot>
 </Container>
 </>
  );
}