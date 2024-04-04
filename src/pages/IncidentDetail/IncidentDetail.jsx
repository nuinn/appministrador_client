import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import incidents from '../../data/incidents.json'
import Header from '../../components/Header/Header.jsx'
import damp from '../../assets/images/damp.png'
import StyledImageCarousel from './styled/Carousel.js'
import Stepper from '../../components/Stepper/Stepper.jsx'
import StyledContainer from './styled/Container.js'
import StyledButton from '../../components/styled/Button/Button.js'
import Footer from '../../components/Footer/Footer.jsx'

const StyledWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  --bs-gutter-x: 0rem;
`

const StyledButtonContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 100px;
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
        <div className='col-12 col-sm-6 col-lg-4'>
          <StyledImageCarousel $image={damp}>
          </StyledImageCarousel>
        </div>
        <Stepper className='col-12 col-sm-6 col-lg-4'></Stepper>
        <StyledContainer className='col-12 col-sm-6 col-lg-4'>
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
      </StyledWrap>
      <StyledButtonContainer>
        <StyledButton>Editar</StyledButton>
        <StyledButton>Aceptar</StyledButton>
      </StyledButtonContainer>
      <Footer type='incidents' />
    </>
  )
}

export default IncidentDetail