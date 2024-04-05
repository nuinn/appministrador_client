import styled from "styled-components";

const Carousel = styled.div`
  width: 90%;
  height: 300px;
  background-color: var(--light-grey-color);
  border-radius: 32px;
  // border-radius: 0px 0px 32px 32px;
  background-image: url(${props => props.$image});
  background-repeat: no-repeat;
  // background-attachment: fixed;
  background-position: center;
  margin-bottom: 32px;
  box-shadow: 2px 2px 6px 0px #85858540;
  border: 1px solid var(--light-grey-color);
  // margin-top: -12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: .1s;

  & img {
    opacity: 0.7;
    width: 24px;
    cursor: pointer;
    transition: .5s;

    &:hover {
      transform: scale(1.2);
    }
    &:active {
      transform: scale(0.8);
    }
  }
`;

export default Carousel;