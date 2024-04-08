import StyledLoadingSpinner from './styled/LoadingSpinner.js'
import whiteLogo from '../../assets/logos/transparentWhiteLogo.png'
import greenLogo from '../../assets/logos/transparentGreenLogo.png'

function LoadingSpinner(props) {
  const { type } = props
  return (
    <StyledLoadingSpinner>
      <img src={type === 'white' ? whiteLogo : greenLogo} />
      <span className={type === 'white' ? 'white' : 'green'}></span>
    </StyledLoadingSpinner>
  )
}

export default LoadingSpinner