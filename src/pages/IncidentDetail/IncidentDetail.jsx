import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useApi from '../../hooks/useApi.js'
import formatDateTime from '../../services/formatDateTime.js'
import Header from '../../components/Header/Header.jsx'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner.jsx'
import Detail from '../../components/Detail/Detail.jsx'
import Footer from '../../components/Footer/Footer.jsx'

function IncidentDetail() {
  const { incident_id } = useParams()
  const { getData, data, error, isLoading } = useApi()

  useEffect(() => {
    getData({
    route: `/incidents/${incident_id}`
    })
  },[])

  function acceptIncident() {
    getData({
      route: '/incidents/',
      method: 'PATCH',
      body: {

      }
    })
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
        />
      </>
      }
      <Footer type='incidents' />
    </>
  )
}

export default IncidentDetail