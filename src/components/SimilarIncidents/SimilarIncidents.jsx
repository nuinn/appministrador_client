import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx'
import useApi from '../../hooks/useApi.js'
import StyledMapper from '../../components/styled/Mapper/Mapper.js'
import Card from '../Card/Card.jsx'

function SimilarIncidents(props) {
  const { category, params } = props
  const navigate = useNavigate()
  const { loggedUser } = useLoggedUserContext()
  const { getData, data, error } = useApi()
  const [similarIncidents, setSimilarIncidents] = useState([])

  useEffect(() => {
    if (loggedUser && loggedUser.isAdmin) {
      getData({
        route: `/incidents/category/${category}`
      })
    }
  }, [loggedUser])

  useEffect(() => {
    data && setSimilarIncidents(data.filter((incident) => incident._id != params ))
    error && console.log(error)
  }, [data, error])

  function navigateHandler(incident) {
    navigate('/incidencias/detalle/'+incident._id)
    window.location.reload();
  }

  return (
    <>
      { !!similarIncidents.length &&
      <StyledMapper>
        <p className='title'>Incidencias Similares</p>
        {similarIncidents
        .slice(0, 5)
        .map((incident, i) =>
          <Card
            key={`incident ${i}`}
            type='incidents'
            item={incident}
            onClick={ () => navigateHandler(incident) }
          />)}
      </StyledMapper>
      }
    </>
  )
}

export default SimilarIncidents;