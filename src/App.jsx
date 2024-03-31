import 'react-router-dom'
import { useState, useEffect } from 'react'
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

function App() {
  const [user, setUser] = useState(false)
  const navigate = useNavigate()

  const marc = {
    firstName: "Marc",
    admin: true,
  }
  // useEffect(() => {
  //   setUser(marc)
  // }, [])

  console.log(localStorage.token)

  return (
    <>
      <main>
        {user &&
        <>
          <StyledWelcomeLogo>
            <h2>
              ¡Hola <br /> {user.firstName.split(" ")[0]}!
            </h2>
            <img src={appLogo} alt="Tu Appministrador Logo" />
          </StyledWelcomeLogo>
          <StyledButtonsContainer>
            {homeIcons
              .filter((button) => user.admin ? button : !button.admin)
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
        {!user && <Login />}
        <StyledHomeImageContainer>
            <img src={backgroundImg} alt="" />
        </StyledHomeImageContainer>
      </main>
    </>
  )
}

export default App
