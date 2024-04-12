import styled from "styled-components";

const StyledStepperContainer = styled.div`
  width: 370px;
  height: 346px;
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
`

const StyledStepAndNotesWrap = styled.div`
  background-color: red;
`;


const StyledStepWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledStepContainer = styled.div`
  width: 320px;
  height: 48px;
  display: flex;
  gap: 17px;

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
  height: 32px;
  width: 32px;
  cursor: pointer;
  & img {
    width: 14px;
  }
  & .showNotes {
    transform: scaleY(-1);
  }
`;

const StyledNotesContainer = styled.div`
  background-color: green;
  height: 50px;
`;

const StyledLineWrap = styled.div`
  width: 372px;
  height: 364px;
  padding: 21px 33px;
  margin: 0px 20px;
  position: relative;
  // box-sizing: border-box;
`

const StyledLine = styled.div`
  border-left: 2px solid var(--grey-color);
  width: 100%;
  height: 100%;
  // margin: 21px 42px;
  overflow-y: hidden;
  // position: absolute;
`

export {
  StyledStepperContainer,
  StyledStepAndNotesWrap,
  StyledStepWrap,
  StyledStepContainer,
  StyledStepTitle,
  StyledArrowContainer,
  StyledNotesContainer,
  StyledLineWrap,
  StyledLine,
}