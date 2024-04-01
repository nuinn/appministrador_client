import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useToggle from '../../hooks/useToggle.js'
import useApi from '../../hooks/useApi.js'
import StyledLoginContainer from './styled/LoginContainer.js'
import StyledFormContainer from './styled/FormContainer.js'
import StyledInputWrap from './styled/InputWrap.js'
import appLogo from '../../assets/logos/transparentWhiteLogoBrand.png'
import showPassword from '../../assets/icons/showPassword.png'
import hidePassword from '../../assets/icons/hidePassword.png'
import errorIcon from '../../assets/icons/error.png'
import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx'

function Login() {
  const navigate = useNavigate()
  const [passwordVisibility, togglePasswordVisibility] = useToggle(false)
  const { data, error, isLoading, getData } = useApi()
  const { setLoggedUser } = useLoggedUserContext()
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  function handleInput(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  function submitHandler(e) {
    e.preventDefault()
    getData({
      route: '/auth/login',
      method: 'POST',
      body: formValues,
    })
    formValues.email = ''
    formValues.password = ''
  }

  useEffect(() => {
    if (data && 'user' in data) {
      setLoggedUser(data.user)
    }
  }, [data])

  return (
    <StyledLoginContainer>
      <div className="logoContainer">
        <img src={appLogo} alt="Tu Appministrador Logo" />
      </div>
      <StyledFormContainer>
        <div className="inputsContainer">
          <StyledInputWrap>
            <input
            name="email"
            type="text"
            placeholder='correo electrónico'
            onChange={ handleInput }
            value={ formValues.email }
            autoComplete='off'
            autoFocus={true}
            />
          </StyledInputWrap>
          <StyledInputWrap>
            <input
            name="password"
            type={passwordVisibility ? "text" : "password"}
            placeholder='contraseña'
            onChange={ handleInput }
            value= { formValues.password }
            autoComplete='off'
            />
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
        <div className={error ? "errorDisplay" : "errorContainer"}>
          {error &&
          <>
            <div className="iconContainer">
              <div className='iconBackground'></div>
              <img src={errorIcon} alt="" />
            </div>
            <div className="errorMessage">{error.msg}</div>
          </>}
        </div>
        <p>¿No tienes cuenta?</p>
        <div className="register" onClick={ () => navigate('/registrar') }>Regístrate</div>
      </div>
    </StyledLoginContainer>
  )
}

export default Login