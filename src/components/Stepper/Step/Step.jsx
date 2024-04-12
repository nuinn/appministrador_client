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
import downArrow from '../../../assets/stepperIcons/downArrow.png'

function Step(props) {
  const { step, steps, index } = props
  const [showNotes, toggleShowNotes] = useToggle(false)

  return (
    <StyledStepAndNotesWrap className={ showNotes ? 'showNotes' : 'hideNotes' }>
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
        <StyledArrowContainer
          onClick={ steps[index] && steps[index].note && toggleShowNotes }
          className={ steps[index] && steps[index].note && toggleShowNotes ? '' : 'inactive'}>
          <img
          src={ downArrow }
          className={ showNotes ? 'upArrow' : '' }/>
        </StyledArrowContainer>
      </StyledStepWrap>
      { steps[index] && steps[index].note &&
        <StyledNotesContainer
        className={ showNotes ? 'showNote' : 'hideNote' }
        onClick={ toggleShowNotes }>
        <span>{steps[index] ? steps[index].note : ''}</span>
      </StyledNotesContainer>
      }
    </StyledStepAndNotesWrap>
  )
}

export default Step