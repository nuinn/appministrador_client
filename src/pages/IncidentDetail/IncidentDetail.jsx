import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx'
import useApi from '../../hooks/useApi.js'
import formatDateTime from '../../services/formatDateTime.js'
import Header from '../../components/Header/Header.jsx'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner.jsx'
import Detail from '../../components/Detail/Detail.jsx'
import StyledMapper from '../../styled/Mapper/Mapper.js'
import Footer from '../../components/Footer/Footer.jsx'

const StyledWrap = styled.div`

`;


function IncidentDetail() {
  const { incident_id } = useParams()
  const { getData, data, error, isLoading } = useApi()
  const { loggedUser } = useLoggedUserContext()
  const getIncident = {route: `/incidents/${incident_id}`}

  useEffect(() => {
    getData(getIncident)
  },[])

  function reloadData() {
    getData(getIncident)
  }

  useEffect(() => {
    if (loggedUser && loggedUser.isAdmin) {
      getData()
    }
  }, [loggedUser])

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {data &&
      <>
        <Header
          title={`Incidencias / ${data.title}`}
          community={data.community.address}
          path='/incidencias'
        />
        <Detail
          images={data.image}
          title={data.title}
          description={data.description}
          owner={data.owner}
          category={data.category}
          date={formatDateTime(data.date)}
          steps={data.progressSteps}
          params={ incident_id }
          status={data.status}
          reload={reloadData}
        />
        <StyledContainer></StyledContainer>
        <StyledWrap className='row'>
          <StyledMapper>

          </StyledMapper>
        </StyledWrap>
      </>
      }
      <Footer type='incidents' />
    </>
  )
}

export default IncidentDetail