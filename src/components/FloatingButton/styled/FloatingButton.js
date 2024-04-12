import styled from "styled-components";

const FloatingButton = styled.div`
  height: 44px;
  border-radius: 44px;
  position: fixed;
  background-color: var(--secondary-color);
  right: 1.5em;
	bottom: 5.5em;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  // transition: background-color 1s ease 0s;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.15);
  transition: .2s ease;

  &:hover, &:active {
    background-color: var(--main-color);
    transform: scale(0.95);
  }

  & span, p {
    color: white;
    font-weight: 200;
  }

  & span {
    font-size: 44px;
  }

  & p {
    font-size: 16px;
    font-weight: 300;
    // background-color: var(--main-color);
  }
`;

export default FloatingButton;