import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    input {
      margin-bottom: 10px;
      height: 50px;
      padding: 20px;
      background: rgba(0, 0, 0, 0.4);
      border: none;
      border-radius: 4px;
      color: #fff;
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
