import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-router-dom'
import { useLoggedUserContext } from './contexts/loggedUserContext.jsx'
import useApi from './hooks/useApi.js'
import './App.css'
import StyledWelcomeLogo from './components/styled/WelcomeLogo/WelcomeLogo.js'
import StyledButtonsContainer from './components/styled/ButtonsContainer/ButtonsContainer.js'
import StyledHomeButton from './components/styled/HomeButton/HomeButton.js'
import StyledHomeImageContainer from './components/styled/HomeImageContainer.js'
import Login from './components/Login/Login.jsx'
import appLogo from './assets/logos/transparentWhiteLogoBrand.png'
import backgroundImg from '../src/assets/images/homeImage.png'
import homeIcons from './files/homeIcons.js'
import Captcha from './components/Captcha/Captcha.jsx'

function App() {
  const navigate = useNavigate()
  const { loggedUser } = useLoggedUserContext()
  const { getData, data } = useApi()
  const [personalCommunityImg, setPersonalCommunityImg] = useState('')
  const [showCaptcha, setShowCaptcha] = useState(false)
  const siteKey = '6Le6c74pAAAAACKX90Z_-GP2-CwXQTR0JnKro8yh'

  // No borréis esto abajo por favor. Luego cuando estén las imagenes bien metidas en el back, lo implementaré.

  useEffect(() => {
    if(loggedUser) {
      setShowCaptcha(true);
    }
    // if (loggedUser && loggedUser.community_id.length === 1) {
    //   console.log('this is the case')
    //   getData({
    //     route: `/communities/${loggedUser.community_id}`
    //   })
    // }
  }, [loggedUser])

  useEffect(() => {
    if (data && data[0].image) {
      console.log('data', data[0].image)
      setPersonalCommunityImg(data[0].image)
    }
  }, [data])

  function onSubmitCaptcha(token) {
    console.log('Token de reCAPTCHA:', token);
    console.log();
    if (loggedUser && loggedUser.community_id.length === 1) {
      console.log('this is the case')
      getData({
        route: `/communities/${loggedUser.community_id}`
      })
    }
  }

  return (
    <>
      <main>
        {loggedUser && showCaptcha &&
          <Captcha siteKey={siteKey} onSubmit={onSubmitCaptcha} />
        }
        {loggedUser && !showCaptcha &&
        <>
          <StyledWelcomeLogo>
            <h2>
              ¡Hola <br /> {loggedUser.firstName.split(" ")[0]}!
            </h2>
            <img src={appLogo} alt="Tu Appministrador Logo" />
          </StyledWelcomeLogo>
          <StyledButtonsContainer>
            {homeIcons
              .filter((button) => loggedUser.isAdmin ? button : !button.admin)
              .map((button) =>
                <StyledHomeButton key={`${button.name} button`} onClick={ () => navigate(button.route) }>
                  <div>
                    <img src={button.image} alt="" />
                  </div>
                  <p>{button.name}</p>
                </StyledHomeButton>
              )}
          </StyledButtonsContainer>
        </>
        }
        {!loggedUser && <Login />}
        <StyledHomeImageContainer>
            <img src={personalCommunityImg ? personalCommunityImg : backgroundImg} alt="" />
        </StyledHomeImageContainer>
      </main>
    </>
  )
}

export default App
