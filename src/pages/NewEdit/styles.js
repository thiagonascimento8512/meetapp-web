import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    font-size: 18px;

    span {
      color: rgba(255, 0, 0, 0.7);
      font-size: 14px;
      margin-top: -10px;
      margin-bottom: 10px;
    }

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

    .react-datepicker-wrapper,
    .react-datepicker__input-container,
    #date {
      width: 100%;
    }

    .react-datepicker__close-icon::after {
      background-color: #f94d6a;
      position: absolute;
      top: 15px;
      right: 15px;
      line-height: 1.3;
    }
    .react-datepicker__time-container {
      right: -85px;
      top: -1px;

      .react-datepicker__time {
        .react-datepicker__time-box {
          .react-datepicker__time-list {
            width: 83px;
            height: 231px !important;
          }
        }
      }
    }

    & > button {
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
