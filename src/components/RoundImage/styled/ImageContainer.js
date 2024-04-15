import styled from "styled-components";

const ImageContainer = styled.div`
  position: absolute;
  left: 0px;
  z-index: 2;

  & div {
    overflow: hidden;
    border-radius: 100vw;
    position: relative;
    box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.25);
    width: 115px;
    height: 115px;
    display: flex;
    align-items: center;
    background-color: white;

    & img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

export default ImageContainer;