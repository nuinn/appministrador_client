import styled from "styled-components";

const LoginContainer = styled.div`
  z-index: 3;
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  & * {
    box-sizing: border-box;
  }

  & .logoContainer {
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      // padding-top: 10%;
    }
  }

  & .linkContainer {
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    align-items: center;
    color: white;
    font-size: 14px;
    gap: 12px;

    & .errorContainer {
      height: 36px;
      width: 296px;
      margin-top: 8px
    }

    & .errorDisplay {
      height: 36px;
      width: 296px;
      margin-top: 8px;
      display: flex;
      align-items: center;
      border: 2px solid var(--main-color);
      border-radius: 36px;
      border-left: none;
      background-color: rgba(171, 23, 47, 0.3);

      & .iconContainer {
        height: 36px;
        width: 36px;
        display: flex;
        justify-content: center;
        align-items: center;

        & img {
          width: 38px;
          position: absolute;
        }
        & .iconBackground {
          background-color: white;
          border-radius: 100%;
          width: 34px;
          height: 34px;
        }
      }

      & .errorMessage {
        display: flex;
        align-items: center;
        // background-color: var(--main-color);
        height: 100%;
        width: 264px;
        padding: 8px;
        border-radius: 4px;
      }
    }


    & .register {
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