import styled from 'styled-components';

export const SolidButton = styled.button`
  padding: 18px 36px;
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.neutral.white};
  ${(props) => props.color && `color: ${props.color}`}
  background-color: ${({ theme }) => theme.palette.accent};
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor}`};
  border: none;
  ${(props) => props.border && 'border: 2px solid currentColor'};
  border-radius: 5px;
  cursor: pointer;
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
  }

  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;
