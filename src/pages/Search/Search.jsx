import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx'
import useApi from '../../hooks/useApi.js'
import Header from '../../components/Header/Header.jsx'
import StyledCardsContainer from '../../components/styled/CardsContainer/CardsContainer.js'
import Card from '../../components/Card/Card.jsx'
import StyledFloatingButton from '../../components/styled/FloatingButton/FloatingButton.js'
import Footer from '../../components/Footer/Footer.jsx'

function Search(props) {
  const { type } = props
  const navigate = useNavigate()
  const { getData, data, isLoading, error } = useApi()
  const { loggedUser } = useLoggedUserContext()

  useEffect(() => {
    if (loggedUser) {
      switch (true) {
        case type === 'communities':
          getData({
            route: `/communities/user/${loggedUser._id}`
          })
          break;
        case type === 'incidents':
          getData({
            route: `/incidents/byUser/`
          })
        default:
          break;
      }
    }
  }, [loggedUser])

  function navigateHandler(item) {
    switch (true) {
      case type === 'incidents':
        return `/incidencias/detalle/${item._id}`

      default:
        break;
    }
  }

  return (
    <>
      <Header
      title={ type === 'communities' ? 'Comunidades' : 'Incidencias' }
      path='/'
      />
      <StyledCardsContainer>
        {data && data.map((item, i) =>
          <Card
            onClick={ () => navigate(navigateHandler(item)) }
            key={`${type} ${i}`}
            type={type}
            data={item}
          />
        )}
      </StyledCardsContainer>
      <StyledFloatingButton>
        <span>+</span>
      </StyledFloatingButton>
      <Footer type={type} />
    </>
  )
}

export default Search