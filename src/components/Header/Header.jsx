import { useNavigate } from 'react-router-dom'
import StyledHeader from './Styled/Header.js'
import StyledBackNavigator from './Styled/BackNavigator.js'
import transparentBrand from '../../assets/logos/transparentWhiteBrand.png'
import backIcon from '../../assets/icons/back.png'

function Header(props) {
  const { title } = props
  const navigate = useNavigate()
  return (
    <>
      <StyledHeader >
        <img onClick={ () => navigate('/') } src={transparentBrand} alt="Tu AppMinistrador logo" />
      </StyledHeader>
      <StyledBackNavigator>
        <img onClick={ () => navigate(-1) } src={backIcon} alt="back" />
        <p>{title}</p>
      </StyledBackNavigator>
    </>
  )
}

export default Header