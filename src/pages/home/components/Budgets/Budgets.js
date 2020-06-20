import React from 'react';

import { Heading4, Paragraph } from 'assets/styles/typography';
import AddBankAccount from 'assets/img/addBankAccount/image.png';
import { Section, Container, ContentSection, ImageSection } from 'assets/styles/layout';

function Budgets() {
  return (
    <Section>
      <Container>
        <ContentSection data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <Heading4>Make your budgets</Heading4>
          <Paragraph margin="20px 0px 0px 0px" fontSize="18px">
            ThinkOut is the online platform that delivers financial analysis and forecasting for
            SMEs in just a few minutes, based on the transaction history from their bank accounts.
          </Paragraph>
        </ContentSection>
        <ImageSection fluid right data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <img src={AddBankAccount} alt="" />
        </ImageSection>
      </Container>
    </Section>
  );
}

export default Budgets;
