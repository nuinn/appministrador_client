import styled from "styled-components";

const WelcomeLogo = styled.div`
  height: 90vh;
  width: auto;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 58px;
  padding-bottom: 5vh;
  padding-top: 5vh;
  z-index: 3;

  & img {
    width: 56.46px;
    height: 58.62px;
  }
  & h2 {
    color: white;
    font-size: 1.5em;
  }
`;

export default WelcomeLogo;