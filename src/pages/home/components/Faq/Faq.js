import React from 'react';

import { Heading2, Paragraph } from 'assets/styles/typography';

import Accordion from 'components/Accordion';
import { Section, Container, CenteredTitle, Content } from './style';

const accordionItems = [
  {
    id: 0,
    title: 'Cine are acces la datele mele?',
    content: (
      <Paragraph>
        Siguranța datelor este una dintre prioritățile noastre. Garantăm confidențialitatea și
        păstrarea acureteței datelor conform normelor în vigoare.
      </Paragraph>
    ),
  },
  {
    id: 1,
    title: 'Este conexiunea cu banca securizată?',
    content: (
      <Paragraph>
        Siguranța datelor este una dintre prioritățile noastre. Garantăm confidențialitatea și
        păstrarea acureteței datelor conform normelor în vigoare.
      </Paragraph>
    ),
  },
];

function Faq() {
  return (
    <>
      <Section>
        <Container>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>FAQ</Heading2>
          </CenteredTitle>
          <Content data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
            <Accordion accordionItems={accordionItems} />
          </Content>
        </Container>
      </Section>
    </>
  );
}

export default Faq;
