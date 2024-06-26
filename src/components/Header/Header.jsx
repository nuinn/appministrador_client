import { useNavigate } from 'react-router-dom'
import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx'
import StyledHeader from './Styled/Header.js'
import StyledSubheader from './Styled/Subheader.js'
import StyledBackNavigator from './Styled/BackNavigator.js'
import transparentBrand from '../../assets/logos/transparentWhiteBrand.png'
import logout from '../../assets/icons/logout.png'
import backIcon from '../../assets/icons/back.png'

function Header(props) {
  const { title, community, path } = props
  const navigate = useNavigate()
  const { setLoggedUser } = useLoggedUserContext()

  function logoutHandler() {
    delete localStorage.token
    delete localStorage.user
    setLoggedUser()
    navigate('/')
  }

  return (
    <>
      <StyledHeader >
        <img className='logo' onClick={ () => navigate('/') } src={transparentBrand} alt="Tu AppMinistrador logo" />
        <img className='logout' onClick={ logoutHandler } src={logout} alt="logout" />
      </StyledHeader>
      <StyledSubheader>
        <StyledBackNavigator>
          <img onClick={ () => navigate(path) } src={backIcon} alt="back" />
          <p>{title}</p>
        </StyledBackNavigator>
        { community && <div className='community'><p>{community}</p></div> }
      </StyledSubheader>
    </>
  )
}

export default Header