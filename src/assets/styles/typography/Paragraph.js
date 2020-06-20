import styled from 'styled-components';

export const Paragraph = styled.p`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 400;
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  color: inherit;
  ${(props) => props.color && `color: ${props.color};`}
  line-height: 1.8;
  margin: 0;
  ${(props) => props.margin && `margin: ${props.margin}`}
  text-align: left;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`}
`;
