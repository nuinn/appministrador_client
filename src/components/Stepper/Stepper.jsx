import styled from "styled-components"
import useToggle from '../../hooks/useToggle'
import register from '../../assets/stepperIcons/register.png'
import open from '../../assets/stepperIcons/open.png'
import inspect from '../../assets/stepperIcons/inspect.png'
import repair from '../../assets/stepperIcons/repair.png'
import finalise from '../../assets/stepperIcons/finalise.png'
import arrowDown from '../../assets/stepperIcons/arrowDown.png'

const stepNames = ['Registro de incidencia','Apertura de reclamación','Inspección','Trabajando en la reparación','Finalización']

const fakeData = [
  {
    name: 'Registro de incidencia',
    date: '02/04/2024 10:34h',
  },
  {
    name: 'Apertura de reclamación',
    date: '03/04/2024 08:15h',
    note: 'Hoy llamo al seguro'
  }
]

// console.log(fakeData.filter((data) => data.name === 'Registro de incidencia'))


const stepperMap = [
  {
    name: 'Registro de incidencia',
    icon: register,
  },
  {
    name: 'Apertura de reclamación',
    icon: open
  },
  {
    name: 'Inspección',
    icon: inspect
  },
  {
    name: 'Trabajando en la reparación',
    icon: repair
  },
  {
    name: 'Finalización',
    icon: finalise
  }
]

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
  box-sizing: border-box;
`

const StyledLine = styled.div`
  border-left: 2px solid var(--grey-color);
  width: 100%;
  height: 100%;
  // margin: 21px 42px;
  overflow-y: hidden;
  // position: absolute;
`

function Stepper(){
  const [showNotes, toggleShowNotes] = useToggle(false)

  return (
    <StyledLineWrap>
      <StyledStepperContainer>
        { stepperMap.map((step) =>
          <StyledStepWrap>
            <StyledStepContainer key={step.name}>
              <div className={`iconContainer
                ${fakeData.filter((data) => data.name === step.name).length ? 'completed' : 'yes'}`}>
                <img
                className={ step.name === 'Trabajando en la reparación' ? 'large' : ''
                || step.name === 'Inspección' ? 'small' : '' }
                src={step.icon} />
              </div>
              <StyledStepTitle>
                <p className="title">{step.name}</p>
                <p className="data">{ fakeData.filter((data) => data.name === step.name).length ?
                fakeData.filter((data) => data.name === step.name)
                        .map((data) => data.date) : 'Proximamente' }</p>
              </StyledStepTitle>
            </StyledStepContainer>
            <StyledArrowContainer>
              <img src={ arrowDown } />
            </StyledArrowContainer>
          </StyledStepWrap>
        )}
      </StyledStepperContainer>
      <StyledLine />
    </StyledLineWrap>
  )
}

export default Stepper