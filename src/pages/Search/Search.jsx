import communities from '../../data/communities.json'
import Header from '../../components/Header/Header.jsx'
import StyledCardsContainer from '../../styled/CardsContainer/CardsContainer.js'
import Card from '../../components/Card/Card.jsx'
import Footer from '../../components/Footer/Footer.jsx'

function Search(props) {
  const { type } = props

  return (
    <>
      <Header />
      <StyledCardsContainer>
        { communities.map((community, i) =>
          <Card key={`${community} ${i}`} type={type} data={community} />
        )}
      </StyledCardsContainer>
      <Footer />
    </>
  )
}

export default Search