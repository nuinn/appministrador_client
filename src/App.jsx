import 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './App.css'
import StyledWelcomeLogo from './components/styled/WelcomeLogo/WelcomeLogo.js'
import StyledButtonsContainer from './components/styled/ButtonsContainer/ButtonsContainer.js'
import StyledHomeButton from './components/styled/HomeButton/HomeButton.js'
import StyledHomeImageContainer from './components/styled/HomeImageContainer.js'
import Login from './components/Login/Login.jsx'
import appLogo from './assets/logos/transparentWhiteLogoBrand.png'
import backgroundImg from '../src/assets/images/homeImage.png'
import homeIcons from './files/homeIcons.js'
import { useLoggedUserContext } from './contexts/loggedUserContext.jsx'

function App() {
  const navigate = useNavigate()
  const { loggedUser } = useLoggedUserContext()

  return (
    <>
      <main>
        {loggedUser &&
        <>
          <StyledWelcomeLogo>
            <h2>
              ¡Hola <br /> {loggedUser.firstName.split(" ")[0]}!
            </h2>
            <img src={appLogo} alt="Tu Appministrador Logo" />
          </StyledWelcomeLogo>
          <StyledButtonsContainer>
            {homeIcons
              .filter((button) => loggedUser.admin ? button : !button.admin)
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
            <img src={backgroundImg} alt="" />
        </StyledHomeImageContainer>
      </main>
    </>
  )
}

export default App
