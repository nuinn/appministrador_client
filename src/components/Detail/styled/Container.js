import styled from "styled-components";

const Container = styled.div`
  padding: 8px 16px;
  width: 370px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  // margin: 16px 0px 32px;
  margin-bottom: 32px;
  border: 1px solid var(--light-grey-color);
  border-radius: 32px;
  box-shadow: 2px 2px 6px 0px #85858540;
  position: relative;

  & * {
    color: var(--dark-grey-color);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  & .content{
    position: relative;

    & .title {
      font-size: 20px;
      color: var(--secondary-color);
      text-align: center;
      line-height: 24px;
      margin-bottom: 8px;
    }

    & textarea {
      width: 330px;
      height: 136px;
      border-radius: 8px;
      padding: 2px 8px;
      box-sizing: border-box;
      border: none;
      background-color: var(--light-grey-color);
      resize: none;
      font-size: 13px;

      &:focus {
        outline: 0;
        border: none;
      }
    }
  }

  & .editing {
    background-color: var(--dark-grey-color);
  }

  & .details {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & .header {
      font-size: 16px;
      line-height: 19px;
      color: var(--secondary-color);
    }

    & select {
      width: 330px;
      // height: 136px;
      border-radius: 8px;
      padding: 4px 8px;
      box-sizing: border-box;
      border: none;
      background-color: var(--light-grey-color);
      // resize: none;
      font-size: 13px;
    }

    & :last-child {
      margin-bottom: 8px;
    }
  }
`;

export default Container;
