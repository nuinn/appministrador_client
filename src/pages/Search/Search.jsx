import communities from '../../data/communities.json'
import Header from '../../components/Header/Header.jsx'
import StyledCardsContainer from '../../styled/CardsContainer/CardsContainer.js'
import Card from '../../components/Card/Card.jsx'
import { Flex } from "antd";

function Search(props) {
  const { type } = props

  return (
    <>
      <Header />
      <StyledCardsContainer>
        <Card type={type} data={communities[0]} />
      </StyledCardsContainer>
    </>
  )
}

export default Search