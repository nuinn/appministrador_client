import { useState, useEffect } from 'react'
import { useLoggedUserContext } from '../../../contexts/loggedUserContext.jsx'
import useApi from '../../../hooks/useApi.js'
import useToggle from '../../../hooks/useToggle.js'
import formatDateTime from '../../../services/formatDateTime.js'
import {
  StyledStepAndNotesWrap,
  StyledStepWrap,
  StyledStepContainer,
  StyledStepTitle,
  StyledArrowContainer,
  StyledNotesContainer,
  StyledUpdateButton,
  StyledTextArea,
} from '../styled/StyledComponents.js'
import downArrow from '../../../assets/stepperIcons/downArrow.png'
import message from '../../../assets/stepperIcons/message.png'
import send from '../../../assets/stepperIcons/send.png'

function Step(props) {
  const { step, steps, index, params, reload } = props
  const [inputNote, setInputNote] = useState('')
  const { loggedUser } = useLoggedUserContext()
  const { getData, data, isLoading, error } = useApi()
  const [showNotes, toggleShowNotes] = useToggle(false)

  useEffect(() => {
    data && console.log(data)
    error && console.log(error)
  }, [data, error])

  function onChangeHandler(e) {
    setInputNote(e.target.value);
  }

  function submitHandler() {
    const body = {
      _id: params,
      step: {
        title: step.name,
        note: inputNote
      }
    }
    getData({
      route: '/incidents/',
      method: 'PATCH',
      body: body,
    })
    reload()
  }

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
        { !steps[index] && loggedUser.isAdmin &&
          <StyledUpdateButton
            onClick={ toggleShowNotes }
            className={ showNotes ? 'active' : '' }
            >
            { showNotes ? 'Cancelar' : 'Actualizar' }
            </StyledUpdateButton>
        }
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
          <img src={message} alt="message icon" />
          <span>{steps[index] ? steps[index].note : ''}</span>
        </StyledNotesContainer>
      }
      { !steps[index] && loggedUser.isAdmin &&
      <>
        <StyledTextArea
          className={ showNotes ? 'visible' : 'hidden' }
          onChange={ onChangeHandler }
          placeholder='Escribe una nota informativa'
          autoFocus />
        <img
          src={send}
          className={ showNotes ? 'send visible' : 'hidden' }
          onClick={ submitHandler }
          alt="send" />
      </>
      }
    </StyledStepAndNotesWrap>
  )
}

export default Step