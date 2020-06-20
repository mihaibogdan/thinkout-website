import styled from 'styled-components';

import { Container } from 'assets/styles/layout';

export const Section = styled(Container)`
  min-height: 70vh;
  position: relative;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1023px) and (orientation: portrait) {
    min-height: 900px;
    flex-direction: row;
  }
`;
