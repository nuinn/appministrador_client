import { useState } from 'react'
import communities from '../../data/communities.json'
import incidents from '../../data/incidents.json'
import incidentsFilter from '../../data/incidentsFilter.json'
import Header from '../../components/Header/Header.jsx'
import StyledCardsContainer from '../../components/styled/CardsContainer/CardsContainer.js'
import StyledFilter from '../../components/styled/StyledFilter/StyledFilter.js'
import Card from '../../components/Card/Card.jsx'
import StyledFloatingButton from '../../components/styled/FloatingButton/FloatingButton.js'
import Footer from '../../components/Footer/Footer.jsx'
import Filter from '../../components/Filter/Filter.jsx'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'

function Search(props) {
  const { type } = props
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
      <SearchBar onSearch = {handleSearchedText}/>
      <StyledFilter>
        { type === 'incidents' && <Filter data={incidentsFilter} onApplyFilters={handleApplyFilters} onClearFilters={handleClearFilters} />}
        <StyledCardsContainer>
          { type === 'communities' && searchedCommunities.map((community, i) =>
            <Card key={`${community} ${i}`} type={type} data={community} />
          )}
          { type === 'incidents' && filteredIncidents.map((incident, i) =>
            <Card key={`${incident} ${i}`} type={type} data={incident} />
          )}
        </StyledCardsContainer>
      </StyledFilter>
      <StyledFloatingButton>
        <span>+</span>
      </StyledFloatingButton>
      <Footer type={type} />
    </>
  )
}

export default Search