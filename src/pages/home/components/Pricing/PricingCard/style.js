import styled from 'styled-components';

import { Paragraph } from 'assets/styles/typography';

export const StylePricingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.neutral.white};
  border-radius: 5px;
  padding: 24px 24px 40px 24px;
  box-shadow: 0 0px 0px 0px rgba(51, 51, 51, 0.1);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 18px 40px 5px rgba(51, 51, 51, 0.1);
    transform: translateY(-3px);
  }

  &&.aos-finished[data-aos^='fade'][data-aos^='fade'] {
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-3px);
    }
  }

  .cardTitle {
    margin: 20px 0px 15px 0px;
  }

  ${Paragraph} {
    margin: 10px 0 0 0;
  }

  a {
    margin-top: 30px;
  }
`;

export const Price = styled.div`
  margin-top: 12px;
  display: flex;
`;

export const CardEmoji = styled.span`
  font-size: 48px;
`;

export const Currency = styled.sup`
  font-size: 20px;
  align-self: flex-start;
`;

export const Frequency = styled.sub`
  align-self: flex-end;
`;
