import styled from 'styled-components';

import { Container, ImageSection } from 'assets/styles/layout';

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const OfferedBySection = styled(Container)`
  min-height: 100vh;
  position: relative;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    min-height: initial;

    ${ImageSection} {
      margin: 30px 0;
      order: 0;
    }
  }

  @media screen and (max-width: 1024px) {
    ${ImageSection} {
      img {
        width: 90%;
        height: auto;
      }
    }
  }
`;
