import styled from "styled-components";

const BackNavigator = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  padding: 0px 32px;
  position: relative;

  & img {
    height: 24px;
    cursor: pointer;
  }

  & p {
    font-size: 14px;
    line-height: 22px;
    color: var(--grey-color);
    weight: 400;
    left: 80px;
    position: absolute;
  }
`;

export default BackNavigator;