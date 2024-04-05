import styled from "styled-components";

const Subheader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 0px 8px;
  margin: 0px 0px 24px;
  box-shadow: 2px 2px 6px 0px #85858540;

  & .community {
    height: 22px;
    display: flex;
    align-items: center;

    & p {
      position: absolute;
      left: 80px;
      font-size: 14px;
      color: var(--secondary-color);
    }
  }
`;

export default Subheader;