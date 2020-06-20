import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-size: 56px;
  font-weight: 500;
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  line-height: 1.2;
  margin: 0;
  color: inherit;
  ${(props) => props.color && `color: ${props.color};`}

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`;
