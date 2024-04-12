import styled from "styled-components";

const StyledStepperWrap = styled.div`
  width: 372px;
  height: 100%;
  padding: 12px 33px 18px;
  margin: 0px 20px;
  position: relative;
  box-sizing: border-box;
  user-select: none;
  & .test {
    border-left: 2px solid var(--grey-color);
    position: absolute;
    height: 86.5%;
    z-index: 0;
    width: 82%;
  }
`

const StyledStepperContainer = styled.div`
  width: 370px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px 0px;
  border: 1px solid var(--light-grey-color);
  border-radius: 32px;
  box-shadow: 2px 2px 6px 0px #85858540;
  gap: 27px;

  & .hideNotes {
    height: 56px;
  }
  & .hideNote {
    top: 0px;
  }

  & .showNotes {
    height: 84px;
  }
  & .showNote {
    top: 48px;
  }


`

const StyledStepAndNotesWrap = styled.div`
  position: relative;
  transition: 1s ease;
  // background-color: white;
`;


const StyledStepWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  z-index: 2;
  & .inactive {
    & img {
      visibility: hidden;
    }
  }
`

const StyledStepContainer = styled.div`
  width: 320px;
  height: 48px;
  display: flex;
  gap: 17px;
  background-color: white;
  z-index: 2;

  & .iconContainer {
    width: 48px;
    height: 48px;
    border-radius: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--mid-grey-color);
    & img {
      width: 15px;
    }
    & .large {
      width: 20px;
    }
    & .small {
      width: 13px;
    }
  }

  & .completed {
    background-color: var(--secondary-color);
  }
`

const StyledStepTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .title {
    font-size: 16px;
    line-height: 19px;
    color: var(--secondary-color);
  }
  & .data {
    font-size: 12px;
    line-height: 14.4px;
    color: #B2B2B2;
  }
`

const StyledArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 32px;
  cursor: pointer;
  z-index: 2;
  background-color: white;
  & img {
    width: 14px;
  }
  & .upArrow {
    transform: scaleY(-1);
  }
`;

const StyledNotesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 56px;
  transition: 1s ease;
  display: flex;
  align-items: center;
  background-color: var(--light-grey-color);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 12px 24px;
  box-sizing: border-box;
  border: 1px solid var(--secondary-color);
  border-top: none;
  cursor: pointer;
  z-index: 1;
  & span {
    font-size: 12px;
  }
`;

const StyledLine = styled.div`
  border-left: 2px solid var(--grey-color);
  width: 100%;
  height: 100%;
  // margin: 21px 42px;
  overflow-y: hidden;
  // position: absolute;
`

export {
  StyledStepperWrap,
  StyledStepperContainer,
  StyledStepAndNotesWrap,
  StyledStepWrap,
  StyledStepContainer,
  StyledStepTitle,
  StyledArrowContainer,
  StyledNotesContainer,
}