import StyledImageContainer from './styled/ImageContainer.js'

function RoundImage(props) {
  const { image } = props

  return (
    <StyledImageContainer>
      <div>
        <img src={image} alt="" />
      </div>
    </StyledImageContainer>
  )
}

export default RoundImage