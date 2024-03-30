import styled from "styled-components";

const FloatingButton = styled.div`
  width: 44px;
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
  transition: background-color 1s ease 0s;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: var(--main-color);
  }

  & span {
    font-size: 44px;
    color: white;
    font-weight: 200;
  }
`;

export default FloatingButton;