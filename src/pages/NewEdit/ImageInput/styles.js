import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.4);
  height: 300px;
  margin-bottom: 20px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: 100%;
      padding: 0;
    }

    input {
      display: none;
    }
  }
`;
