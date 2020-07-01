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
    margin-top: 140px;
    align-items: center;
    min-height: initial;

    ${ImageSection} {
      margin: 30px 0;
      order: 0;
    }
  }
`;
