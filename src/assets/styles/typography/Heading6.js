import styled from 'styled-components';

export const Heading6 = styled.h6`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.23;
  margin: 0;
  ${(props) => props.margin && `margin: ${props.margin}`}
  color: inherit;
  ${(props) => props.color && `color: ${props.color}`};
  text-align: center;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
