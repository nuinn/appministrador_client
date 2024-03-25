import 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './App.css'
import StyledWelcomeLogo from './styled/WelcomeLogo/WelcomeLogo.js'
import StyledButtonsContainer from './styled/ButtonsContainer/ButtonsContainer.js'
import StyledHomeButton from './styled/HomeButton/HomeButton.js'
import appLogo from './assets/transparentLogo.png'
import backgroundImg from '../src/assets/images/homeImage.png'
import homeIcons from './files/homeIcons.js'
import StyledHomeImageContainer from './styled/HomeImageContainer.js'

function App() {
  const navigate = useNavigate()
  const user = {
    firstName: "Marc",
    admin: true,
  }

  return (
    <>
      <main>
        <StyledWelcomeLogo>
          <h2>
						¡Hola <br /> {user.firstName.split(" ")[0]}!
					</h2>
          <img src={appLogo} alt="" />
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
        <StyledHomeImageContainer>
            <img src={backgroundImg} alt="" />
        </StyledHomeImageContainer>
      </main>
    </>
  )
}

export default App
