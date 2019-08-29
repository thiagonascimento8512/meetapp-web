import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    h2 {
      font-weight: normal;
      font-size: 32px;
      color: #fff;
    }
  }
`;

export const ButtonContainer = styled.div`
  button {
    width: 136px;
    height: 42px;
    border-radius: 4px;
    color: #fff;

    &:first-child {
      margin-right: 15px;
    }

    &#edit {
      background: #4dbaf9;

      &:hover {
        background: ${darken(0.08, '#4dbaf9')};
      }
    }

    &#cancel {
      background: #d44059;

      &:hover {
        background: ${darken(0.08, '#d44059')};
      }
    }
  }
`;

export const DetailMeetup = styled.div`
  overflow: hidden;
  color: #fff;

  img {
    height: 300px;
  }

  p {
    margin: 25px auto;
    font-size: 18px;
    line-height: 32px;
    text-align: justify;
  }

  div {
    font-size: 16px;
    line-height: 20px;
    opacity: 0.6;

    time {
      margin-right: 70px;
    }
  }
`;

export const Description = styled.p``;
