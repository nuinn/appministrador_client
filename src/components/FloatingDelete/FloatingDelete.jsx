import { useState, useEffect } from 'react'
import styled from 'styled-components'
import StyledFloatingDelete from './styled/FloatingDelete.js'
import bin from '../../assets/icons/bin.png'

const StyledContainer = styled.div`
  user-select: none;
  position: relative;

  & div {
    width: 36px;
  }

  .clicked {
    width: 160px;
    background-color: var(--secondary-color);
    color: white;
  }
`

function FloatingButton(props) {
  const { handleDelete } = props
  const [buttonState, setButtonState] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => setButtonState(''), 3000)
    return () => clearTimeout(timer)
  }, [buttonState])

  function onClickHandler() {
      buttonState === 'clicked' ? handleDelete() : setButtonState('clicked')
  }

  return (
    <StyledContainer onClick={ onClickHandler }>
      <StyledFloatingDelete className={buttonState && 'clicked'}>
        {buttonState ?
        <p>¿Eliminar foto?</p>
        :
        <img src={bin}></img>
        }
      </StyledFloatingDelete>
    </StyledContainer>
  )
}

export default FloatingButton