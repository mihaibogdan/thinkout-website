import styled from 'styled-components';

export const BorderButton = styled.button`
  padding: 18px 36px;
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.neutral.white};
  background-size: 200% auto;
  background-position: 0;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 5px;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &&.aos-finished[data-aos^='fade'][data-aos^='fade'] {
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: all;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    background-size: 200% auto;
    color: ${({ theme }) => theme.palette.neutral.white};
    background-position: 100%;
  }

  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;
