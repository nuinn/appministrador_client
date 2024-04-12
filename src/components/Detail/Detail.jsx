import { useState } from 'react'
import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx'
import styled from 'styled-components'
import StyledWrap from './styled/Wrap.js'
import StyledImageCarousel from './styled/ImageCarousel.js'
import StyledContainer from './styled/Container.js'
import Stepper from '../Stepper/Stepper.jsx'
import StyledButtonContainer from './styled/ButtonContainer.js'
import StyledButton from '../styled/Button/Button.js'
import left from '../../assets/icons/left.png'
import right from '../../assets/icons/right.png'

const StyledFooterPusher = styled.div`
  padding-bottom: 200px;
`

function getFormattedNewDate(){
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
  const year = currentDate.getFullYear();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}h`;
  return formattedDate
}

function Detail(props){
  const { images, title, description, owner, category, date, nextStep, prevStep, params, steps, status } = props
  const [imageIndex, setImageIndex] = useState(0)
  const { loggedUser } = useLoggedUserContext()

  function onClickHandler(direction){
    setImageIndex(() => imageIndex + direction)
  }

  const incidentMapper = [
    {
      header: 'Publicado por:',
      body: `${owner.firstName} ${owner.lastName}`
    },
    {
      header: 'Categoría:',
      body: category
    },
    {
      header: 'Fecha de Incidencia:',
      body: date ? date : getFormattedNewDate()
    }
  ]

  return (
    <>
      <StyledWrap className='row'>
        <div className='carouselContainer col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4'>
          <StyledImageCarousel $image={images[imageIndex]}>
            { imageIndex ?
            <img onClick={ () => onClickHandler(-1) } src={left} alt="left arrow" />
            : <span></span>
            }
            { (!!images.length && (imageIndex !== images.length-1)) &&
            <img onClick={ () => onClickHandler(1) } src={right} alt="right arrow" />
            }
          </StyledImageCarousel>
        </div>
        <StyledContainer className='col-12 col-sm-10 col-md-6 col-lg-4'>
          <div className="content">
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
          </div>
          { incidentMapper.map((block) =>
            <div key={block.header} className='details'>
              <p className='header'>{block.header}</p>
              <p className='body'>{block.body}</p>
            </div>) }
        </StyledContainer>
        { params && <Stepper steps={steps} className='col-12 col-sm-10 col-md-6 col-xl-4'></Stepper>}
        <StyledFooterPusher />
      </StyledWrap>
      { !params || loggedUser.isAdmin &&
      <StyledButtonContainer>
        {! params &&
        <>
          <StyledButton onClick={prevStep}>Volver</StyledButton>
          <StyledButton onClick={ () => nextStep(title) }>Enviar</StyledButton>
        </>
        }
        {
          loggedUser.isAdmin &&
        <>
          <StyledButton $bgcolor='var(--dark-grey-color)' onClick={prevStep}>Editar</StyledButton>
          { status === 'Pendiente' &&
          <StyledButton onClick={ () => nextStep(title) }>Aceptar</StyledButton>
          }
        </>
        }
      </StyledButtonContainer>
      }
    </>
  )
}

export default Detail