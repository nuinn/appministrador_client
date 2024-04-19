import { useEffect } from 'react'
import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx'
import useApi from '../../hooks/useApi.js'
import StyledMapper from '../../components/styled/Mapper/Mapper.js'
import Card from '../Card/Card.jsx'

function RecommendedProviders(props) {
  const { category, incidentId, provider, reload } = props
  const { loggedUser } = useLoggedUserContext()
  const { getData, data, error } = useApi()

  useEffect(() => {
    if (loggedUser && loggedUser.isAdmin && !provider) {
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
    <StyledMapper $border={ provider && 'none' } $boxshadow={ provider && 'none' }>
      <p className='title'>{ provider ? 'Proveedor Asignado' : 'Proveedores Recomendados'}</p>
      {data && data.slice(0, 3).map((provider, i) =>
        <Card
          key={`provider ${i}`}
          type='providers'
          item={provider}
          button={true}
          incidentId={incidentId}
          reload={reload}
        />
      )}
      {provider &&
        <Card
          $margintop='0px'
          type='providers'
          item={provider}
        />
      }
    </StyledMapper>
  )
}

export default RecommendedProviders;