import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx'
import useApi from '../../hooks/useApi.js'
import StyledMapper from '../../components/styled/Mapper/Mapper.js'
import Card from '../Card/Card.jsx'

function SimilarIncidents(props) {
  const { category, reload, params, setPetition } = props
  const navigate = useNavigate()
  const { loggedUser } = useLoggedUserContext()
  const { getData, data, error } = useApi()

  useEffect(() => {
    if (loggedUser && loggedUser.isAdmin) {
      getData({
        route: `/incidents/category/${category}`
      })
    }
  }, [loggedUser, params])

  useEffect(() => {
    // data && console.log(data);
    error && console.log(error)
  }, [data, error])

  function navigateHandler(incident) {
    console.log(incident.title)
    setPetition({})
    navigate('/incidencias/detalle/'+incident._id)
    reload()
  }

  return (
    <StyledMapper>
      <p className='title'>Incidencias Similares</p>
      {data &&
      data
      .filter((incident) => incident._id != params )
      .map((incident, i) =>
        <Card
          key={`incident ${i}`}
          type='incidents'
          data={incident}
          onClick={ () => navigateHandler(incident) }
        />)}
    </StyledMapper>
  )
}

export default SimilarIncidents;