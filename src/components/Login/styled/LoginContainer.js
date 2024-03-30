import styled from "styled-components";

const LoginContainer = styled.div`
  z-index: 3;
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  & .logoContainer {
    height: 33%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .linkContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    align-items: center;
    color: white;
    font-size: 14px;
    gap: 12px;

    & div {
      border: 1px solid white;
      border-radius: 24px;
      padding: 4px 36px;
      cursor: pointer;
      font-weight: 600;


      &:hover {
        background-color: white;
        color: var(--secondary-color);
      }
    }
  }
`;

export default LoginContainer;