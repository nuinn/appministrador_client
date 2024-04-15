import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import useApi from '../../hooks/useApi.js'
import formatDateTime from '../../services/formatDateTime.js'
import Header from '../../components/Header/Header.jsx'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner.jsx'
import Detail from '../../components/Detail/Detail.jsx'
import RecommendedProviders from '../../components/RecommendedProviders/RecommendedProviders.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 200vh;
  gap: 28px;
`

const StyledContainer = styled.div`
  height: 56vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  --bs-gutter-x: 0rem;
`


function IncidentDetail() {
  const { incident_id } = useParams()
  const { getData, data, error, isLoading, clearData } = useApi()
  const [petition, setPetition] = useState({route: `/incidents/${incident_id}`})

  useEffect(() => {
    petition && petition.route && getData(petition)
  },[])

  useEffect(() => {
    clearData
  }, [incident_id])

  function reloadData() {
    getData(petition)
  }

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
          setPetition={setPetition}
        />
      </>
      }
      <Footer type='incidents' />
    </>
  )
}

export default IncidentDetail