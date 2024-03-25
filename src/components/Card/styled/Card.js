import styled from "styled-components";

const Card = styled.div`
  position: relative;
  width: 366px;
  height: 128px;
  display: flex;
  align-items: center;
  margin-top: 16px;

  & .roundedImage {
      position: absolute;
      left: 0px;
      z-index: 2;

      & img {
          display: flex;
          align-items: center;
      }
  }

  .descriptionContainer {
      left: 60px;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.15);
      position: relative;
      border-radius: 8px;
      width: 300px;
      height: 128px;
      border: 1px solid #f0f0f0;

  }
`;

export default Card;