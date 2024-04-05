import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import incidents from '../../data/incidents.json'
import Header from '../../components/Header/Header.jsx'
import damp from '../../assets/images/damp.png'
import tap from '../../assets/images/tap.png'
import lift from '../../assets/images/lift.png'
import StyledImageCarousel from './styled/Carousel.js'
import Stepper from '../../components/Stepper/Stepper.jsx'
import StyledContainer from './styled/Container.js'
import StyledButton from '../../components/styled/Button/Button.js'
import Footer from '../../components/Footer/Footer.jsx'

const StyledWrap = styled.div`
  height: 56vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  --bs-gutter-x: 0rem;
  & .carouselContainer {
    // width: 90%;
    display: flex;
    justify-content: center;
  }
`

const StyledButtonContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 100px;
  // margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 16px;
  // margin-bottom: 100px;
`

const StyledFooterPusher = styled.div`
  // height: 100px;
  // position: fixed;
`

const props = incidents[0]

function IncidentDetail() {
  const { incident_id } = useParams()
  const { title, community, description, owner, date, image, provider } = props

  const incidentMapper = [
    {
      header: 'Publicado por:',
      body: owner
    },
    {
      header: 'Categoría:',
      body: provider
    },
    {
      header: 'Fecha de Incidencia:',
      body: date
    }
  ]

  return (
    <>
      <Header
      title={`Incidencias / ${title}`}
      community={community}
      path='/incidencias'/>
      <StyledWrap className='row'>
        <div className='carouselContainer col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4'>
          <StyledImageCarousel $image={tap}>
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
        <Stepper className='col-12 col-sm-10 col-md-6 col-xl-4'></Stepper>
      </StyledWrap>
      <StyledButtonContainer>
        <StyledButton>Editar</StyledButton>
        <StyledButton>Aceptar</StyledButton>
      </StyledButtonContainer>
      <StyledFooterPusher />
      <Footer type='incidents' />
    </>
  )
}

export default IncidentDetail