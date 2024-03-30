import useToggle from '../../hooks/useToggle.js'
import StyledLoginContainer from './styled/LoginContainer.js'
import StyledFormContainer from './styled/FormContainer.js'
import StyledInputWrap from './styled/InputWrap.js'
import appLogo from '../../assets/logos/transparentWhiteLogoBrand.png'
import showPassword from '../../assets/icons/showPassword.png'
import hidePassword from '../../assets/icons/hidePassword.png'

function Login() {
  const [passwordVisibility, togglePasswordVisibility] = useToggle(false)

  function submitHandler(e) {
    e.preventDefault()
  }
  return (
    <StyledLoginContainer>
      <div className="logoContainer">
        <img src={appLogo} alt="" />
      </div>
      <StyledFormContainer>
        <div className="inputsContainer">
          <StyledInputWrap>
            <input type="text" placeholder='correo electrónico' />
          </StyledInputWrap>
          <StyledInputWrap>
            <input type={passwordVisibility ? "text" : "password"} placeholder='contraseña' />
            <img onClick={togglePasswordVisibility} src={passwordVisibility ? hidePassword : showPassword} alt="" />
          </StyledInputWrap>
        </div>
        <div className="submitContainer">
          <div className="optionsContainer">
            <label className="customCheckbox">
              <input type="checkbox" name="checkbox" value="value" />
              Recordar sesión
            </label>
            <p>¿Has olvidado tu contraseña?</p>
          </div>
          <div className="buttonContainer">
            <input onClick={submitHandler} type="submit" value="Acceder" />
          </div>
        </div>
      </StyledFormContainer>
      <div className="linkContainer">
        <p>¿No tienes cuenta?</p>
        <div>Regístrate</div>
      </div>
    </StyledLoginContainer>
  )
}

export default Login