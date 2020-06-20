import styled from 'styled-components';

export const Heading4 = styled.h4`
  font-size: 34px;
  font-weight: 500;
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  line-height: 1.23;
  margin: 0px 0px 20px 0px;
  ${(props) => props.margin && `margin: ${props.margin}`}
  color: inherit;
  ${(props) => props.color && `color: ${props.color}`};

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
