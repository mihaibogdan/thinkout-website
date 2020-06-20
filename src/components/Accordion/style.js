import styled from 'styled-components';
import { rgba } from 'polished';

export const AccordionItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  user-select: none;
`;

export const AccordionItem = styled.div`
  box-shadow: 0 0 40px 10px rgba(255, 18, 32, 0.05);
  border-radius: 5px;
  overflow: hidden;
  height: 60px;
  transition: height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-bottom: 20px;

  .contentWrapper {
    display: none;
  }

  .contentWrapper.displayBlock {
    display: block;
  }

  &.active {
    .accordion-title {
      background-color: ${({ theme }) => theme.palette.primary.light};
      color: ${({ theme }) => theme.palette.neutral.white};
    }
  }
`;

export const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 19px 30px;
  color: ${({ theme }) => rgba(theme.palette.primary.dark, 0.6)};
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: ${({ theme }) => rgba(theme.palette.primary.main, 1)};
    cursor: pointer;
  }

  h6,
  svg {
    pointer-events: none;
  }

  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  }
`;

export const AccordionTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 19px 30px;
`;

export const AccordionContent = styled.div`
  padding: 23px 30px 29px;
  color: ${({ theme }) => theme.palette.neutral.grey};
`;
