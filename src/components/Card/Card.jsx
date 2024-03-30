import StyledCard from './styled/Card.js'
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
          <div className="titlebar">
            <h3>{data.address}</h3>
          </div>
          <div className="content">
            <p>{`Propietarios: ${data.n_propie}`}</p>
            <p>{`Inquilinos: ${data.n_inquilinos}`}</p>
            <p>{`Presidente: ${data.president.name}`}</p>
            <p>{`Contacto: ${data.president.mobile_num}`}</p>
          </div>
        </StyledDescription>
        }
        { type === 'incidents' &&
        <>
          <StyledDescription>
            <div className="titlebar">
              <h3>{data.title}</h3>
              <h4>{data.community}</h4>
            </div>
            <div className="content">
              <p>{data.description.substring(0, 65)+"..."}</p>
              <h5>{data.provider}</h5>
            </div>
          </StyledDescription>
          <span>{data.date}</span>
        </>
        }
      </div>
    </StyledCard>
  )
}

export default Card