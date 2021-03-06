import styled from 'styled-components';

import { Container, ImageSection } from 'assets/styles/layout';

export const HeroSection = styled(Container)`
  min-height: 100vh;
  position: relative;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 140px;
    align-items: center;
    min-height: initial;

    ${ImageSection} {
      margin: 30px 0;
      order: 0;
    }
  }

  @media screen and (min-width: 1024px) and (max-height: 650px) {
    min-height: 650px;
  }
`;
