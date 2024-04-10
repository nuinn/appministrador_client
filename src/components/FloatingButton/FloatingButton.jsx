import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import StyledFloatingButton from './styled/FloatingButton.js'

const StyledContainer = styled.div`
  user-select: none;

  & div {
    width: 44px;
  }

  .clicked {
    width: 180px;
    background-color: var(--main-color);
  }
`

function FloatingButton(props) {
  const { type } = props
  const [buttonState, setButtonState] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => setButtonState(''), 3000)
    return () => clearTimeout(timer)
  }, [buttonState])

  function onClickHandler(type) {
    if (type === 'incidents') {
      buttonState === 'clicked' ? navigate('reportar') : setButtonState('clicked')
    }
  }

  return (
    <StyledContainer onClick={ () => onClickHandler(type) }>
      <StyledFloatingButton className={buttonState && 'clicked'}>
        {buttonState ?
        <p>Reportar Incidencia</p>
        :
        <span>+</span>
        }
      </StyledFloatingButton>
    </StyledContainer>
  )
}

export default FloatingButton