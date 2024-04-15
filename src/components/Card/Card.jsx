import StyledCard from './styled/Card.js'
import RoundImage from '../../components/RoundImage/RoundImage.jsx'
import StyledDescription from './styled/Description.js'
import formatDateTime from '../../services/formatDateTime.js'
import './Card.css'

function Card(props) {
  const { type, data, onClick } = props

  return (
    <StyledCard onClick={onClick}>
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
            <p>{`Presidente: ${data.president && data.president.name}`}</p>
            <p>{`Contacto: ${data.president && data.president.mobile_num}`}</p>
          </div>
        </StyledDescription>
        }
        { type === 'incidents' &&
        <>
          <StyledDescription>
            <div className="titlebar">
              <h3>{data.title}</h3>
              <h4>{data.community && data.community.address}</h4>
            </div>
            <div className="content">
              <p>{data.description && data.description.substring(0, 65)+"..."}</p>
              <h5>{data.category}</h5>
            </div>
          </StyledDescription>
          <span>{formatDateTime(data.date, true)}</span>
        </>
        }
        { type === 'providers' &&
        <>
          <StyledDescription>
            <div className="titlebar">
              <h3>{data.companyName}</h3>
              <h4>
                  {data.categories && data.categories.map((category, index) => (
                    <li key={index}>{category}</li>
                  ))}
              </h4>
            </div>
            <div className="content">
              <p>{`Contacto: ${data.contactPerson}`}</p>
              <p>{`Valoración: ${data.rating}`}</p>
              <a href={`tel:${data.phone}`} className="phone-link">
                <img src='src/assets/icons/phoneCall.jpg' alt="" />
                {data.phone}
                </a>
            </div>
          </StyledDescription>
        </>
        }
      </div>
    </StyledCard>
  )
}

export default Card