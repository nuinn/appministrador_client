import {
  StyledStepperWrap,
  StyledStepperContainer,
} from './styled/StyledComponents.js'
import Step from './Step/Step.jsx'
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

function Stepper(props){
  const { steps, params, reload } = props

  return (
    <StyledStepperWrap>
      <StyledStepperContainer>
        { stepperMap.map((step, i) =>
          <Step
          key={step.name}
          step={step}
          index={i}
          steps={steps}
          params={params}
          reload={reload}
          />
        )}
        <div className="test"></div>
      </StyledStepperContainer>
    </StyledStepperWrap>
  )
}

export default Stepper