import React from 'react';

import { Heading4, Paragraph } from 'assets/styles/typography';
import Coperta2 from 'assets/img/coperta2.png';
import { Section, Container, ContentSection, ImageSection } from 'assets/styles/layout';
import { List, ListItem } from 'assets/styles/general/List';

function Accounts() {
  return (
    <Section>
      <Container>
        <ImageSection fluid data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <img src={Coperta2} width="400" alt="" />
        </ImageSection>
        <ContentSection data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <Heading4>Ce vei găsi în interior?</Heading4>
          <List>
            <ListItem color="inherit">
              <Paragraph>1. </Paragraph>
              <Paragraph color="inherit" margin="0px 0px 0px 20px">
                <strong>Indicatori de lichiditate</strong>, care măsoară capacitatea companiei de
                a-și îndeplini obligațiile financiare.
              </Paragraph>
            </ListItem>
            <ListItem color="inherit">
              <Paragraph>2. </Paragraph>
              <Paragraph color="inherit" margin="0px 0px 0px 20px">
                <strong>Indicatori de profitabilitate</strong>, care apreciază eficiența companiei
                în a genera profit din resursele existente.
              </Paragraph>
            </ListItem>
            <ListItem color="inherit">
              <Paragraph>3. </Paragraph>
              <Paragraph color="inherit" margin="0px 0px 0px 20px">
                <strong>Indicatori de activitate</strong>, care evaluează cât de eficient sunt
                folosite activele firmei.
              </Paragraph>
            </ListItem>
            <ListItem color="inherit">
              <Paragraph>4. </Paragraph>
              <Paragraph color="inherit" margin="0px 0px 0px 20px">
                <strong>Indicatori de risc</strong>, care urmăresc intensitatea cu care sunt
                folosite resursele externe pentru creșterea afacerii.
              </Paragraph>
            </ListItem>
          </List>
        </ContentSection>
      </Container>
    </Section>
  );
}

export default Accounts;
