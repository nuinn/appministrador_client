import styled from "styled-components";

const Wrap = styled.div`
  // height: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  --bs-gutter-x: 0rem;
  // margin-bottom: 400px;
  & .carouselContainer {
    display: flex;
    justify-content: center;
  }
`;

export default Wrap;