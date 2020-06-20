import styled from 'styled-components';

export const Heading5 = styled.h5`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.23;
  margin: 24px 0px 12px 0px;
  ${(props) => props.margin && `margin: ${props.margin}`}
  color: inherit;
  ${(props) => props.color && `color: ${props.color}`};

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
