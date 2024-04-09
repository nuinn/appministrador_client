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

  useEffect(() => {
    data && console.log(data)
  }, [data])

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
          title={data.title}
          description={data.description}
          owner={data.owner}
          date={formatDateTime(data.date)}
          images={data.image}
          steps={data.progressSteps}
          params={ incident_id }
        />
      </>
      }
      <Footer type='incidents' />
    </>
  )
}

export default IncidentDetail