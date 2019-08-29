import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    font-size: 18px;

    textarea,
    input {
      font-family: inherit;
      font-size: inherit;
      margin-bottom: 10px;
      height: 50px;
      padding: 20px;
      background: rgba(0, 0, 0, 0.4);
      border: none;
      border-radius: 4px;
      color: #fff;
    }

    textarea {
      height: 150px;
      resize: none;
    }

    button {
      width: 180px;
      height: 42px;
      background: #f94d6a;
      border-radius: 4px;
      color: #fff;
      font-size: 16px;
      align-self: flex-end;
    }
  }
`;
