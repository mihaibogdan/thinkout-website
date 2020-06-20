import styled from 'styled-components';

import { Paragraph } from 'assets/styles/typography';
import { SolidButton } from 'assets/styles/buttons';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;

  position: fixed;
  z-index: 5;
  bottom: 0;

  background-color: ${({ theme }) => theme.palette.neutral.white};
  box-shadow: 0 18px 40px 5px rgba(51, 51, 51, 0.1);
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);

  opacity: 1;
  &.fade-out {
    opacity: 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  padding: 0 15px 0px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    max-width: 992px;
    padding: 0 15px 0px 15px;

    flex-direction: column;
    justify-content: center;

    ${Paragraph} {
      text-align: center;
    }

    ${SolidButton} {
      margin-top: 15px;
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 576px;
    padding: 0 15px 0 15px;
  }
`;
