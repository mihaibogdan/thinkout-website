import styled from 'styled-components';
import { rgba } from 'polished';

export const Section = styled.section`
  background: ${({ theme }) => rgba(theme.palette.primary.light, 0.064)};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  ${(props) => props.display && `display: ${props.display}`}
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    max-width: 992px;
    padding: 0px 15px;
  }
  @media screen and (max-width: 768px) {
    max-width: 576px;
    padding: 0px 15px;
  }
`;

export const CenteredTitle = styled.div`
  width: 100%;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PricingCardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 80px 0px;
  justify-content: center;

  .pricingCard {
    width: calc(30% - 60px);
    margin: 30px;
    box-shadow: 0 0 40px 10px rgba(0, 0, 0, 0.05);

    @media screen and (max-width: 992px) {
      width: calc(50% - 30px);
    }
    @media screen and (max-width: 768px) {
      width: calc(100% - 30px);
    }
  }
`;
