import React from 'react';

import { Heading2, Paragraph } from 'assets/styles/typography';
import Link from 'components/Link';
import { Section, Container, CenteredTitle, PricingCardGrid } from './style';
import PricingCard from './PricingCard';

function Pricing() {
  return (
    <Section id="pricing">
      <Container>
        <CenteredTitle>
          <Heading2 data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
            Pricing
          </Heading2>
        </CenteredTitle>
        <PricingCardGrid>
          <PricingCard
            className="pricingCard"
            cardTitle="Basic"
            currency="€"
            price="15"
            frequency="lună"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <Paragraph color="inherit">Un singur utilizator</Paragraph>
            <Paragraph color="inherit">O singură companie</Paragraph>
            <Paragraph color="inherit">Conturi nelimitate</Paragraph>
            <Paragraph color="inherit">Bugete și previziuni financiare</Paragraph>
            <Link button href="https://wa.me/491702988400?text=Hi%20there!">
              ÎNCEARCĂ ACUM
            </Link>
          </PricingCard>
          <PricingCard
            className="pricingCard"
            cardTitle="Plus"
            currency="€"
            price="25"
            frequency="lună"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="250"
          >
            <Paragraph color="inherit">Multipli utilizator</Paragraph>
            <Paragraph color="inherit">Multiple companie</Paragraph>
            <Paragraph color="inherit">Conturi nelimitate</Paragraph>
            <Paragraph color="inherit">Bugete și previziuni financiare</Paragraph>
            <Link button disabled href="https://wa.me/491702988400?text=Hi%20there!">
              ÎN CURÂND
            </Link>
          </PricingCard>
        </PricingCardGrid>
      </Container>
    </Section>
  );
}

export default Pricing;
