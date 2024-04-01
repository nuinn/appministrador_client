import styled from "styled-components";

const WelcomeLogo = styled.div`
  height: 82vh;
  width: auto;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 60px;
  padding-bottom: 8vh;
  padding-top: 10vh;
  z-index: 3;

  & img {
    width: 6.5em;
    // height: 58.62px;
    // padding-left: 10px;
  }
  & h2 {
    color: white;
    font-size: 1.7em;
    font-weight: 500;
    letter-spacing: 0.3px;
    line-height: 1.2em;
  }
`;

export default WelcomeLogo;