import { useEffect } from 'react'
import useApi from '../../hooks/useApi.js'
import StyledCard from './styled/Card.js'
import RoundImage from '../../components/RoundImage/RoundImage.jsx'
import StyledDescription from './styled/Description.js'
import formatDateTime from '../../services/formatDateTime.js'
import './Card.css'
import phone from '../../assets/icons/phone.png'
import phoneCall from '../../assets/icons/phoneCall.jpg'
import StyledButton from './styled/Button.js'

function Card(props) {
  const { type, item, onClick, button, incidentId, $margintop } = props
  const { getData, data } = useApi()

  useEffect(() => {
    data && console.log(data)
  }, [data])

  function addToIncident() {
    const petition = {
      route: '/incidents/',
      method: 'PATCH',
      body: {
        _id: incidentId,
        provider: item._id,
      }
    }
    // console.log(petition)
    getData(petition)
  }

  return (
    <StyledCard $margintop={$margintop} $cursor={type === 'providers' ? 'default' : 'pointer'} onClick={onClick}>
      <RoundImage className='roundedImage' image={item.image} />
      <div className='descriptionContainer'>
        { type === 'communities' &&
        <StyledDescription>
          <div className="titlebar">
            <h3>{item.address}</h3>
          </div>
          <div className="content">
            <p>{`Propietarios: ${item.n_propie}`}</p>
            <p>{`Inquilinos: ${item.n_inquilinos}`}</p>
            <p>{`Presidente: ${item.president && item.president.name}`}</p>
            <p>{`Contacto: ${item.president && item.president.mobile_num}`}</p>
          </div>
        </StyledDescription>
        }
        { type === 'incidents' &&
        <>
          <StyledDescription>
            <div className="titlebar">
              <h3>{item.title}</h3>
              <h4>{item.community && item.community.address}</h4>
            </div>
            <div className="content">
              <p>{item.description && item.description.substring(0, 65)+"..."}</p>
              <h5>{item.category}</h5>
            </div>
          </StyledDescription>
          <span>{formatDateTime(item.date, true)}</span>
        </>
        }
        { type === 'providers' &&
        <>
          <StyledDescription className='noPointer'>
            <div className="titlebar">
              <h3>{item.companyName}</h3>
              <h4>
                  {item.categories && item.categories.map((category, index) => (
                    <li key={index}>{category}</li>
                  ))}
              </h4>
            </div>
            <div className="content">
              <p>{`Contacto: ${item.contactPerson}`}</p>
              <p>{`Valoración: ${item.rating}`}</p>
            </div>
          { button && <StyledButton onClick={ addToIncident }>Asignar a esta incidencia</StyledButton>}
          </StyledDescription>
          <a href={`tel:${item.phone}`} className="phone-link">
            <img src={phone} alt="" />
            {/* {item.phone} */}
          </a>
        </>
        }
      </div>
    </StyledCard>
  )
}

export default Card