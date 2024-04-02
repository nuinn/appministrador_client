import { useParams } from 'react-router-dom'
import incidents from '../../data/incidents.json'
import Header from '../../components/Header/Header.jsx'
import StyledSubheader from '../../components/Header/Styled/Subheader.js'
import StyledImageCarousel from './styled/Carousel.js'

const props = incidents[0]
// console.log(props);

function IncidentDetail() {
  const { incident_id } = useParams()
  const { title, community, description, owner, date, image } = props

  return (
    <>
      <Header
      title={`Incidencias / ${title}`}
      community={community}
      path='/incidencias'/>
      {/* <StyledSubheader>
        <p>{ community }</p>
      </StyledSubheader> */}
      <StyledImageCarousel>

      </StyledImageCarousel>
    </>
  )
}

export default IncidentDetail