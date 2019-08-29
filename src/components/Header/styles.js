import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  background: #000;
  width: 100%;
`;

export const Content = styled.div`
  height: 92px;
  display: flex;
  flex: 1;
  max-width: 660px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  nav {
    img {
      width: 32px;
      height: 32px;
    }
  }

  aside {
    display: flex;
    flex-direction: row;

    button {
      background: #d44059;
      border-radius: 4px;
      width: 72px;
      color: #fff;
      font-size: 16px;
      transition: background 0.3s;

      &:hover {
        background: ${lighten(0.09, '#d44059')};
      }
    }
  }
`;

export const Profile = styled.div`
  color: #fff;
  display: flex;
  height: 39px;

  div {
    text-align: right;
    margin-right: 27px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    strong {
      font-size: 14px;
      line-height: 17px;
      font-weight: normal;
    }

    a {
      display: block;
      font-size: 14px;
      line-height: 17px;
      color: #999;
    }
  }
`;
