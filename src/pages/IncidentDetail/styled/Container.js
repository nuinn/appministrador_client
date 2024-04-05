import styled from "styled-components";

const Container = styled.div`
  padding: 0px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;

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
    }
  }

  & .details {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & .header {
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

export default Container;
