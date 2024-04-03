import styled from "styled-components";

const Subheader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 24px 0px 8px;

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