import communities from '../../data/communities.json'
import incidents from '../../data/incidents.json'
import Header from '../../components/Header/Header.jsx'
import StyledCardsContainer from '../../components/styled/CardsContainer/CardsContainer.js'
import Card from '../../components/Card/Card.jsx'
import StyledFloatingButton from '../../components/styled/FloatingButton/FloatingButton.js'
import Footer from '../../components/Footer/Footer.jsx'

function Search(props) {
  const { type } = props

  return (
    <>
      <Header />
      <StyledCardsContainer>
        { type === 'communities' && communities.map((community, i) =>
          <Card key={`${community} ${i}`} type={type} data={community} />
        )}
        { type === 'incidents' && incidents.map((incident, i) =>
          <Card key={`${incident} ${i}`} type={type} data={incident} />
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