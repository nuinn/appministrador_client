import styled from "styled-components";

const HomeImageContainer = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: contrast(40%) brightness(95%);
  }
`;

export default HomeImageContainer;