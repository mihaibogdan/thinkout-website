import styled from 'styled-components';

import { Container } from 'assets/styles/layout/Container';

export const Nav = styled.nav`
  background-color: transparent;
  position: fixed;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  z-index: 10;
  top: 0px;
  left: 0;
  color: white;
  box-shadow: 0 0 0 0 rgba(51, 51, 51, 0.1);
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);

  .try-now {
    margin-left: auto;
  }

  &.scrolledNavbar {
    background-color: ${({ theme }) => theme.palette.neutral.white};
    box-shadow: 0 18px 40px 5px rgba(51, 51, 51, 0.1);
    height: 80px;
    color: ${({ theme }) => theme.palette.neutral.black};
  }

  ${Container} {
    @media screen and (max-width: 1024px) {
      flex-direction: row;
    }

    @media screen and (max-width: 768px) {
      padding: 0 15px;
    }
  }
`;
