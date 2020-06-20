import React from 'react';

import { Heading4, Paragraph } from 'assets/styles/typography';
import AddBankAccount from 'assets/img/addBankAccount/image.png';
import { Section, Container, ContentSection, ImageSection } from 'assets/styles/layout';
import CheckList from 'assets/img/icons/check.svg';
import { List, ListItem } from 'components/List';

function Accounts() {
  return (
    <Section>
      <Container>
        <ImageSection fluid data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <img src={AddBankAccount} alt="" />
        </ImageSection>
        <ContentSection data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <Heading4>Add a bank account</Heading4>
          <List>
            <ListItem color="inherit">
              <CheckList width="16px" />
              <Paragraph color="inherit" margin="0px 0px 0px 20px">
                Conectează în mod automat conturile bancare ca să salvezi timp și efort. Urmărește
                numerarul disponibil, evoluția încasărilor, plăților și a rezultatului net obținut.
              </Paragraph>
            </ListItem>
            <ListItem color="inherit">
              <CheckList width="16px" />
              <Paragraph color="inherit" margin="0px 0px 0px 20px">
                Verifică soldurile totale ale conturilor conectate, perioada în care compania poate
                supraviețui fără a înregistra noi încasări, dar și structura veniturilor și
                cheltuielilor pe ultimele luni.
              </Paragraph>
            </ListItem>
            <ListItem color="inherit">
              <CheckList width="16px" />
              <Paragraph color="inherit" margin="0px 0px 0px 20px">
                Construiește prognoze, planifică-ți creșterea, anticipează evoluția fluxului de
                numerar și vezi cum stai în raport cu obiectivele pe care le-ai stabilit pentru
                afacerea ta.
              </Paragraph>
            </ListItem>
          </List>
        </ContentSection>
      </Container>
    </Section>
  );
}

export default Accounts;
