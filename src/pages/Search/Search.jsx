import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx'
import useApi from '../../hooks/useApi.js'
import incidentsFilter from '../../data/incidentsFilter.json'
import Header from '../../components/Header/Header.jsx'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner.jsx'
import StyledCardsContainer from '../../components/styled/CardsContainer/CardsContainer.js'
import StyledFilter from '../../components/styled/StyledFilter/StyledFilter.js'
import Card from '../../components/Card/Card.jsx'
import FloatingButton from '../../components/FloatingButton/FloatingButton.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Filter from '../../components/Filter/Filter.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'

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
  const [filteredIncidents, setFilteredIncidents] = useState(incidents);
  const [incidentsInLastSearch, setIncidentsInLastSearch] = useState(incidents);
  const [searchedCommunities, setSearchedCommunities] = useState(communities);
  function handleApplyFilters(filters){
    let newFilteredData = incidents;

    if (filters.status) {
      const trueStatusNames = [];
      for (const key in filters.status) {
        if (filters.status[key]) {
          trueStatusNames.push(key);
        }
      }
      const newFilteredDataStatuses = newFilteredData.filter(item => trueStatusNames.includes(item.status));
      newFilteredData = newFilteredDataStatuses;
    }
    if (filters.date) {
      newFilteredData = newFilteredData.filter(item => new Date(item.date) >= new Date(filters.date));
    }

    if (filters.progress) {
      newFilteredData = newFilteredData.filter(item => item.progress === filters.progress);
    }
    setFilteredIncidents(newFilteredData);
  };
  const handleClearFilters = () => {
    setFilteredIncidents(incidents)
  };

  function handleSearchedText(searchedText){
    if (type ==='communities'){
      let newSearchedComunities = searchedCommunities;
      if (searchedText) {
        console.log(newSearchedComunities);
        newSearchedComunities = newSearchedComunities.filter(item =>{
          console.log(item.address);
          return item.address.includes(searchedText)

        }
        )
        console.log(newSearchedComunities);
      }
      else{
        newSearchedComunities = communities
      }
      setSearchedCommunities(newSearchedComunities)
    }
    else{
      let newFilteredData = filteredIncidents;
      if (searchedText) {
        newFilteredData = newFilteredData.filter(item =>
          item.title.includes(searchedText) || item.description.includes(searchedText)
        )
      }
      else{
        newFilteredData = incidentsInLastSearch;
      }
      setIncidentsInLastSearch(filteredIncidents)
      setFilteredIncidents(newFilteredData);
    }
  }

  return (
    <>
      <Header
      title={ type === 'communities' ? 'Comunidades' : 'Incidencias' }
      path='/'
      />
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