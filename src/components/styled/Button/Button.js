import styled from "styled-components";

const Button = styled.div`
  width: 121px;
  height: 48px;
  border-radius: 51px;
  background-color: var(--secondary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 20px;
  transition: .2s;
  cursor: pointer;

  &:active, &:hover {
    transform: scale(0.95);
    background-color: var(--main-color);
  }
`;

export default Button;
