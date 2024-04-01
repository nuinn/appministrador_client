import { useNavigate } from 'react-router-dom'
import StyledHeader from '../Header/Styled/Header.js'
import transparentBrand from '../../assets/logos/transparentWhiteBrand.png'

function Header() {
  const navigate = useNavigate()
  return (
    <StyledHeader >
      <img onClick={ () => navigate('/') } src={transparentBrand} alt="Tu AppMinistrador logo" />
    </StyledHeader>
  )
}

export default Header