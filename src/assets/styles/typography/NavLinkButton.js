import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLinkButton = styled(Link)`
  color: ${({ theme }) => theme.palette.neutral.white};
  ${(props) => props.color && `color: ${props.color};`}
  font-size: 15px;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 500;
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  margin: 0;
  ${(props) => props.margin && `margin: ${props.margin}`}
  position: relative;

  background-color: ${({ theme }) => theme.palette.accent};
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}

  padding: 14px 36px;
  border-radius: 5px;

  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
  }
`;
