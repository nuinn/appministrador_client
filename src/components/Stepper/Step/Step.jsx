import useToggle from '../../../hooks/useToggle.js'
import formatDateTime from '../../../services/formatDateTime.js'
import {
  StyledStepAndNotesWrap,
  StyledStepWrap,
  StyledStepContainer,
  StyledStepTitle,
  StyledArrowContainer,
  StyledNotesContainer,
} from '../styled/StyledComponents.js'
import arrowDown from '../../../assets/stepperIcons/arrowDown.png'

function Step(props) {
  const { step, steps } = props
  const [showNotes, toggleShowNotes] = useToggle(false)

  return (
    <StyledStepAndNotesWrap>
      <StyledStepWrap key={step.name}>
        <StyledStepContainer key={step.name}>
          <div className={`iconContainer
            ${steps.filter((data) => data.title === step.name).length ? 'completed' : ''}`}>
            <img
            className={ step.name === 'Trabajando en la reparación' ? 'large' : ''
            || step.name === 'Inspección' ? 'small' : '' }
            src={step.icon} />
          </div>
          <StyledStepTitle>
            <p className="title">{step.name}</p>
            <p className="data">{ steps.filter((data) => data.title === step.name).length ?
            steps.filter((data) => data.title === step.name)
                    .map((data) => formatDateTime(data.date)) : 'Proximamente' }</p>
          </StyledStepTitle>
        </StyledStepContainer>
        <StyledArrowContainer onClick={ toggleShowNotes }>
          <img
          src={ arrowDown }
          className={ showNotes ? 'showNotes' : '' }/>
        </StyledArrowContainer>
      </StyledStepWrap>
      <StyledNotesContainer />
    </StyledStepAndNotesWrap>
  )
}

export default Step