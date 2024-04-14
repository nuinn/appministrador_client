import StyledUpdateButton from './styled/UpdateButton.js'

function UpdateButton(props) {
  const { handleSubmit } = props

  return (
    <StyledUpdateButton onClick={handleSubmit}>
      Enviar Cambios
    </StyledUpdateButton>
  )
}

export default UpdateButton