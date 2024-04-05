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
  padding-bottom: 180px;
`

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
`

const StyledLineWrap = styled.div`
  width: 370px;
  height: 346px;
  padding: 21px 32px;
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
  StyledStepWrap,
  StyledStepContainer,
  StyledStepTitle,
  StyledArrowContainer,
  StyledLineWrap,
  StyledLine,
}