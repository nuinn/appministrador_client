import useToggle from '../../hooks/useToggle'
import {
  StyledStepperContainer,
  StyledStepWrap,
  StyledStepContainer,
  StyledStepTitle,
  StyledArrowContainer,
  StyledLineWrap,
  StyledLine,
} from './styled/StyledComponents.js'
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