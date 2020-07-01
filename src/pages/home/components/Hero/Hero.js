import React from 'react';

import { Heading1, Paragraph } from 'assets/styles/typography';
import { ContentSection, ImageSection } from 'assets/styles/layout';
import Form from './Form';
import { HeroSection } from './style';

function Hero() {
  return (
    <>
      <HeroSection>
        <ContentSection>
          <Heading1>19 indicatori financiari importanți pentru tine și afacerea ta</Heading1>
          <Paragraph margin="20px 0px 0px 0px">
            Materialul cuprinde 4 categorii de indicatori pe care trebuie să îi ai în vedere pentru
            o imagine financiară completă a companiei tale.
          </Paragraph>
          <Paragraph margin="20px 0px 0px 0px">
            Află care indicatori se potrivesc domeniului tău, cum să îi calculezi, pe care îi poți
            include în strategia de creștere a firmei tale și care te pot ajuta să iei deciziile
            potrivite pentru afacerea ta.
          </Paragraph>
        </ContentSection>

        <ImageSection className="center" right>
          <Form />
        </ImageSection>
      </HeroSection>
    </>
  );
}

export default Hero;
