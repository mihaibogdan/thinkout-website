import styled from 'styled-components';

import { ImageSection } from './Sections';

export const Container = styled.div`
  width: 1366px;
  min-height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;

  @media screen and (max-width: 1366px) {
    width: 90vw;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;

    ${ImageSection} {
      order: -1;
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 15px;
    align-items: center;
  }
`;
