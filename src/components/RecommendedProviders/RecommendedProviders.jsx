import { useEffect } from 'react'
import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx'
import useApi from '../../hooks/useApi.js'
import StyledMapper from '../../components/styled/Mapper/Mapper.js'
import Card from '../Card/Card.jsx'

function RecommendedProviders(props) {
  const { category } = props
  const { loggedUser } = useLoggedUserContext()
  const { getData, data, error } = useApi()

  useEffect(() => {
    if (loggedUser && loggedUser.isAdmin) {
      getData({
        route: `/providers/category/${category}`
      })
    }
  }, [loggedUser])

  useEffect(() => {
    // data && console.log(data);
    error && console.log(error)
  }, [data, error])

  return (
    <StyledMapper>
      <p className='title'>Proveedores Recomendados</p>
      {data && data.map((provider, i) =>
        <Card
          key={`provider ${i}`}
          type='providers'
          data={provider}
          button={true}
        />)}
    </StyledMapper>
  )
}

export default RecommendedProviders;