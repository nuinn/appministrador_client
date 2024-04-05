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

  & * {
    color: var(--dark-grey-color);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  & .content{

    & .title {
      font-size: 20px;
      color: var(--secondary-color);
      text-align: center;
      line-height: 24px;
      margin-bottom: 8px;
    }
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

    & :last-child {
      margin-bottom: 8px;
    }
  }
`;

export default Container;
