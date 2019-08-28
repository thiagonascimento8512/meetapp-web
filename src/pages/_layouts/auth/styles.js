import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background: linear-gradient(180deg, #22202c 0%, #402845 100%);
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 42px;
      height: 42px;
      margin-bottom: 50px;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 315px;

      input,
      button {
        height: 50px;
        margin-bottom: 10px;
        font-size: 18px;
        border-radius: 4px;
        color: #fff;
        border: none;
      }

      input {
        padding: 0 20px;
        background: #000;
        opacity: 0.2;
      }

      button {
        background: #f94d6a;
      }
    }

    a {
      align-self: center;
      color: #fff;
      font-size: 16px;
      margin-top: 20px;
      opacity: 0.6;
    }
  }
`;
