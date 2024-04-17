import styled from "styled-components";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  margin: 0%;
  z-index: 4;
  display: flex;
  transition: 1s ease;
  user-select: none;

  * {
    box-sizing: border-box;
  }

  & .unactiveIconContainer {
    width: 25%;
    height: 100%;
    background-color: var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--secondary-color);

    & img {
      width: 24px;
      cursor: pointer;
    }
  }

  & .activeIconContainer {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: flex-end;

    & .left, .right {
      width: 20%;
      height: 100%;
      background-color: var(--secondary-color);
      border: 1px solid var(--secondary-color);
    }

    & .left {
      border-top-right-radius: 40%;
      border-left: 5px solid var(--secondary-color);
    }
    & .right {
      border-top-left-radius: 40%;
      border-right: 5px solid var(--secondary-color);
    }

    & .center {
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;

      & .top {
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        & .dip {
          width: 101%;
          height: 55px;
          background: rgb(255,255,255);
          background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
          border-bottom-left-radius: 200%;
          border-bottom-right-radius: 200%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          z-index: 1;
          position: absolute;
          top: -10px;

          & .imageContainer {
            width: 48px;
            height: 48px;
            border-radius: 48px;
            background-color: white;
            position: absolute;
            top: -8px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 1px 5px 24px 0 rgba(0, 0, 0, 0.8);

            & img {
              width: 24px;
              cursor: pointer;
            }
          }
        }
      }

      & .bottom {
        height: 70%;
        width: 100%;
        background-color: var(--secondary-color);
        border: 1px solid var(--secondary-color);
      }
    }
  }

`;

export default FooterContainer;