import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;
`;

export const ContentSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 80%;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 15px;
    align-items: center;
  }
`;

export const ImageSection = styled.div`
  width: 50%;
  ${(props) => (props.right ? 'margin-left: 80px' : 'margin-right: 80px')}
  display: flex;
  align-items: center;

  img {
    max-width: ${(props) => (props.fluid ? '100%' : 'initial')};
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: center;
    margin: 0;
  }
`;
