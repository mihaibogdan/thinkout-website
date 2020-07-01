import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 420px;

  .field {
    margin-bottom: 20px;
    font-size: 16px;
  }

  button {
    margin-top: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 15px;
  }
`;

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;

  a {
    align-self: flex-start;
    margin-top: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`;
