import { useState, useEffect } from 'react'
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
  const { getData, clearData, data, isLoading, error } = useApi()
  const { loggedUser } = useLoggedUserContext()

  const [searchActive, setSearchActive] = useState(false);
  const [filtersNow, setFiltersNow]  = useState();
  const [requestedData, setRequestedData] = useState();
  const [savedRequestedData, setSavedRequestedData] = useState();

  useEffect(() => {
    if (loggedUser) {
      clearData();
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
  }, [loggedUser, type])

  useEffect(() => {
    setRequestedData(data)
  }
  , [data] )

  function refreshFiltersState(newFilter) {
    setFiltersNow(newFilter)
  }

  function navigateHandler(item) {
    switch (true) {
      case type === 'incidents':
        return `/incidencias/detalle/${item._id}`

      default:
        break;
    }
  }

  const handleClearFilters = () => {
    setRequestedData(data)
  };

  function handleApplyFilters(filters){
    let newFilteredData = searchActive ? savedRequestedData : newFilteredData;
    if (filters && Object.keys(filters).length > 0)
    {
      if(filters.status) {
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
        newFilteredData = newFilteredData.filter(item => item.progressSteps[item.progressSteps.length - 1].title === filters.progress);
      }
    }
    setRequestedData(newFilteredData);
  };

  function handleSearchedText(searchedText){
    if (type ==='communities'){
      let newSearchedComunities = data;
      if (searchedText) {
        setSearchActive(true);
        newSearchedComunities = newSearchedComunities.filter(item =>{
          return item.address.toLowerCase().includes(searchedText.toLowerCase())
        });
      }
      else{
        setSearchActive(false);
        newSearchedComunities = data
      }
      setRequestedData(newSearchedComunities)
    }
    else{
      let newFilteredData = Object.keys(filtersNow).length > 0 ? requestedData : data;
      if (searchedText) {
        setSearchActive(true)
        newFilteredData = newFilteredData.filter(item =>
          item.title.toLowerCase().includes(searchedText.toLowerCase()) || item.description.includes(searchedText.toLowerCase())
        )
      }
      else{
        setSearchActive(false)
        newFilteredData = data;
      }
      setSavedRequestedData(newFilteredData)
      setRequestedData(newFilteredData)
    }
  }

  return (
    <>
      <Header
      title={ type === 'communities' ? 'Comunidades' : 'Incidencias' }
      path='/'
      />
      {isLoading && <LoadingSpinner />}
      {!isLoading &&
      <>
      <SearchBar onSearch = {handleSearchedText}/>
      <StyledFilter>
        <StyledCardsContainer>
        { type === 'incidents' && <Filter data={incidentsFilter} onApplyFilters={handleApplyFilters} onClearFilters={handleClearFilters} refreshFilter={refreshFiltersState}/>}
          {requestedData && requestedData.map((item, i) =>
            <Card
              onClick={ () => navigate(navigateHandler(item)) }
              key={`${type} ${i}`}
              type={type}
              data={item}
            />
          )}
        </StyledCardsContainer>
        </StyledFilter>
        <FloatingButton type={type} />
      </>}
      <Footer type={type} clearData={clearData} />
    </>
  )
}

export default Search