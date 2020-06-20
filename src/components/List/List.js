import styled from 'styled-components';

import { Paragraph } from 'assets/styles/typography';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0px;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  display: flex;

  svg {
    flex-shrink: 0;
    height: 24px;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  svg,
  ${Paragraph} {
    display: inline-block;
  }

  ${Paragraph} {
    top: -3px;
    position: relative;
  }
`;
