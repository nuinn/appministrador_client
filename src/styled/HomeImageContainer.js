import styled from "styled-components";

const HomeImageContainer = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  & img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: contrast(70%) brightness(80%);
    left: -10px;
    // bottom: 10px;
    // transform: scale(1.1);
  }
`;

export default HomeImageContainer;