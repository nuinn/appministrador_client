import styled from "styled-components";

const LoadingSpinner = styled.div`
  position: fixed;
  top: 0;
  left; 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
  gap: 12px;

  & img {
    animation: lds-ring 2s infinite;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loading {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }

  .green {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: block;
    margin: 15px auto;
    position: relative;
    background: var(--secondary-color);
    box-shadow: -24px 0 var(--secondary-color), 24px 0 var(--secondary-color);
    box-sizing: border-box;
    animation: shadowPulse 2s linear infinite;
  }

  @keyframes shadowPulse {
    28% {
      background: var(--secondary-color);
      box-shadow: -24px 0 var(--main-color), 24px 0 var(--secondary-color);
    }
    56% {
      background: var(--main-color);
      box-shadow: -24px 0 var(--secondary-color), 24px 0 var(--secondary-color);
    }
    84% {
      background: var(--secondary-color);
      box-shadow: -24px 0 var(--secondary-color), 24px 0 var(--main-color);
    }
  }

  .white {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: block;
    margin: 15px auto;
    position: relative;
    background: #FFF;
    box-shadow: -24px 0 #FFF, 24px 0 #FFF;
    box-sizing: border-box;
    animation: shadowPulseWhite 2s linear infinite;
  }

  @keyframes shadowPulseWhite {
    28% {
      background: #FFF;
      box-shadow: -24px 0 var(--main-color), 24px 0 #FFF;
    }
    56% {
      background: var(--main-color);
      box-shadow: -24px 0 #FFF, 24px 0 #FFF;
    }
    84% {
      background: #FFF;
      box-shadow: -24px 0 #FFF, 24px 0 var(--main-color);
    }
  }

`;

export default LoadingSpinner;