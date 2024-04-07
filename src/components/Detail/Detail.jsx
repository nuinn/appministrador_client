import { useState } from 'react'
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

function Detail(props){
  const { images, title, description, category, owner, date, steps, params } = props
  const [imageIndex, setImageIndex] = useState(0)
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
      body: date
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
            { imageIndex !== images.length-1 &&
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
      { !params &&
      <StyledButtonContainer>
        <StyledButton>Volver</StyledButton>
        <StyledButton>Enviar</StyledButton>
      </StyledButtonContainer>
      }
    </>
  )
}

export default Detail