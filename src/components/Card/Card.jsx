import StyledCard from './styled/Card'
import RoundImage from '../../components/RoundImage/RoundImage.jsx'
import StyledDescription from './styled/Description.js'

function Card(props) {
  const { type, data } = props

  return (
    <StyledCard>
      <RoundImage className='roundedImage' image={data.image} />
      <div className='descriptionContainer'>
        { type === 'communities' &&
        <StyledDescription>
          <h3>{data.address}</h3>
          <p>{`Propietarios: ${data.n_propie}`}</p>
          <p>{`Inquilinos: ${data.n_inquilinos}`}</p>
          <p>{`Presidente: ${data.president.name}`}</p>
          <p>{`Contacto: ${data.president.mobile_num}`}</p>
        </StyledDescription>
        }
      </div>
    </StyledCard>
  )
}

export default Card