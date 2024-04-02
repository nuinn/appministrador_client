import { useNavigate } from 'react-router-dom'
import StyledHeader from './Styled/Header.js'
import StyledSubheader from './Styled/Subheader.js'
import StyledBackNavigator from './Styled/BackNavigator.js'
import transparentBrand from '../../assets/logos/transparentWhiteBrand.png'
import backIcon from '../../assets/icons/back.png'

function Header(props) {
  const { title, community, path } = props
  const navigate = useNavigate()
  return (
    <>
      <StyledHeader >
        <img onClick={ () => navigate('/') } src={transparentBrand} alt="Tu AppMinistrador logo" />
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