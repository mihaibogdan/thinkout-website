import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.palette.accent};
  ${(props) => props.color && `color: ${props.color};`}
  font-size: 15px;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 500;
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  margin: 0;
  ${(props) => props.margin && `margin: ${props.margin}`}
  position: relative;

  &::after {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 1px;
    background-color: currentColor;
  }

  &:hover {
    &::after {
      width: 100%;
      right: auto;
      left: 0;
    }
  }
`;
