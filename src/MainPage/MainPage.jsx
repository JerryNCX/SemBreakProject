import { Container } from '@chakra-ui/react';
import React from 'react'

export default function MainPage() {
  return (
 <>
 <Container>
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Section 1
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </AccordionPanel>
      </AccordionItem>
      </Accordion>
 </Container>
 </>
  );
}