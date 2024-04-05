import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useApi from '../../hooks/useApi.js'
import styled from 'styled-components'
import incidents from '../../data/incidents.json'
import Header from '../../components/Header/Header.jsx'
import Detail from '../../components/Detail/Detail.jsx'
import left from '../../assets/icons/left.png'
import right from '../../assets/icons/right.png'
import damp from '../../assets/images/damp.png'
import tap from '../../assets/images/tap.png'
import lift from '../../assets/images/lift.png'
import Footer from '../../components/Footer/Footer.jsx'

// const imageArray = [damp,tap,lift]

// const props = incidents[0]

function formatDateTime(dateTimeString) {
  // Parse the input datetime string
  const dateTime = new Date(dateTimeString);

  // Extract date components
  const day = dateTime.getDate().toString().padStart(2, '0');
  const month = (dateTime.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = dateTime.getFullYear();
  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');

  // Format the date string
  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}h`;

  return formattedDate;
}

function IncidentDetail() {
  const { incident_id } = useParams()
  const { getData, data, error, isLoading } = useApi()
  // const { title, community, description, owner, date, images, provider } = props

  useEffect(() => {
    getData({
    route: `/incidents/${incident_id}`
    })
  },[])

  return (
    <>
      {isLoading && <p>Loading</p>}
      {data && <Header
        title={`Incidencias / ${data.title}`}
        community={data.community}
        path='/incidencias'
      />}
      {data && <Detail
        title={data.title}
        description={data.description}
        owner={data.owner}
        date={formatDateTime(data.date)}
        images={data.image}
        steps={data.progressSteps}
        params={ incident_id }
      />}
      <Footer type='incidents' />
    </>
  )
}

export default IncidentDetail