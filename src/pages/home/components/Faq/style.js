import styled from 'styled-components';

export const Section = styled.section`
  padding: 60px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  padding: 0 15px 0px 15px;

  @media screen and (max-width: 1200px) {
    max-width: 992px;
    padding: 0 15px 0px 15px;
  }
  @media screen and (max-width: 768px) {
    max-width: 576px;
    padding: 0 15px 60px 15px;
  }
`;

export const CenteredTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

export const Content = styled.div`
  width: 700px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`;
