import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    align-items: center;

    h2 {
      font-size: 32px;
      color: #fff;
      font-weight: normal;
    }

    button {
      width: 172px;
      height: 42px;
      background: #f94d6a;
      border-radius: 4px;
      color: #fff;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.09, '#f94d6a')};
      }
    }
  }
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 18px;
  font-weight: normal;
`;

export const MeetupContainer = styled.ul``;

export const Meetup = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #000;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: ${lighten(0.05, '#000')};
    transform: translate(3px, -3px);
  }
`;

export const Time = styled.time`
  font-size: 16px;
  color: #fff;
  opacity: 0.6;
  padding-right: 46px;
`;
