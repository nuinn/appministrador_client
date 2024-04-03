import styled from "styled-components"
import register from '../../assets/stepperIcons/register.png'
import open from '../../assets/stepperIcons/open.png'
import inspect from '../../assets/stepperIcons/inspect.png'
import repair from '../../assets/stepperIcons/repair.png'
import finalise from '../../assets/stepperIcons/finalise.png'

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
  width: 430px;
  height: 346px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const StyledStepWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledStepContainer = styled.div`
  width: 361px;
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
`

function Stepper(){
  return (
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
        </StyledStepWrap>
      )}
    </StyledStepperContainer>
  )
}

export default Stepper