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
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx'

function Login() {
  const navigate = useNavigate()
  const [passwordVisibility, togglePasswordVisibility] = useToggle(false)
  const { data, error, isLoading, getData } = useApi()
  const { setLoggedUser } = useLoggedUserContext()
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })
  const [isGuestLogin, setIsGuestLogin] = useState(false)

  function handleInput(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  function submitHandler(e) {
    e && e.preventDefault()
    getData({
      route: '/auth/login',
      method: 'POST',
      body: isGuestLogin ? {
        email: 'bridgeateam@gmail.com',
        password: 'theAteam100!'
      } : formValues,
    })
    formValues.email = ''
    formValues.password = ''
  }

  useEffect(() => {
    if (data && 'user' in data) {
      setLoggedUser(data.user)
    }
  }, [data])

  useEffect(() => {
    if (isGuestLogin) {
      submitHandler()
    }
  }, [isGuestLogin])

  return (
    <>
      {isLoading && <LoadingSpinner type='white' />}
      {!isLoading && <StyledLoginContainer>
        <div className="logoContainer">
          <img src={appLogo} alt="Tu Appministrador Logo" />
        </div>
        <StyledFormContainer>
          <div className="inputsContainer">
            <StyledInputWrap>
              <input
              id="emailInput"
              name="email"
              type={ isGuestLogin ? "password" : "email" }
              placeholder='correo electrónico'
              onChange={ handleInput }
              value={ formValues.email }
              autoComplete='off'
              autoFocus={true}
              />
            </StyledInputWrap>
            <StyledInputWrap>
              <input
              id="passwordInput"
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
                {/* New version */}
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
            </>
            }
          </div>
          <p>¿Estás de visita?</p>
          <div className="register" onClick={ () => {
              setIsGuestLogin(true)
            }
          }>Acceso de Invitado</div>
        </div>
      </StyledLoginContainer>}
    </>
  )
}

export default Login