import styled from "styled-components";

const Card = styled.div`
  position: relative;
  width: 20em;
  height: 128px;
  display: flex;
  align-items: center;
  margin-top: 16px;
  user-select: none;
  cursor: ${props => props.$cursor};

  & a {
    position: absolute;
    top: 48px;
    right: 24px;

    & img {
      width: 36px;
    }
  }

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.15);
    position: relative;
    border-radius: 8px;
    width: 18em;
    height: 128px;
    border: 1px solid #f0f0f0;
    background-color: white;

    & span {
      margin-right: 10px;
      margin-top: 100px;
      align-self: flex-end;
      color: var(--grey-color);
      font-size: 10px;
      font-style: italic;
      position: absolute;
    }
  }
`;

export default Card;