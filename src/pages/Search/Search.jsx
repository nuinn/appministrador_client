import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoggedUserContext } from '../../contexts/loggedUserContext.jsx'
import useApi from '../../hooks/useApi.js'
import titles from '../../data/searchTitlesData.json'
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
import StyledContainer from './styled/Container.js'

function Search(props) {
  const { type } = props
  const navigate = useNavigate()
  const { getData, clearData, data, isLoading, error } = useApi()
  const { loggedUser } = useLoggedUserContext()

  const [searchActive, setSearchActive] = useState(false);
  const [filtersNow, setFiltersNow]  = useState();
  const [requestedData, setRequestedData] = useState();
  const [savedSearchedData, setSavedSearchedData] = useState();
  const [savedFilteredData, setSavedFilteredData] = useState();


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
          break;
        case type === 'providers':
          getData({
            route: `/providers/all/`
          })
          break;
        default:
          break;
      }
    }
  }, [loggedUser, type])

  useEffect(() => {
    console.log(data)
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

  function handleClearFilters(){
    setRequestedData(searchActive ? savedSearchedData :  data)
  };

  function handleApplyFilters(filters){
    let newFilteredData = searchActive ? savedSearchedData : data;
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
    setSavedFilteredData(newFilteredData);
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
    if (type ==='incidents'){
      console.log(filtersNow);
      let newFilteredData = filtersNow && Object.keys(filtersNow).length > 0 ? savedFilteredData : data;
      if (searchedText) {
        setSearchActive(true)
        newFilteredData = newFilteredData.filter(item =>
          item.title.toLowerCase().includes(searchedText.toLowerCase()) ||
          item.description.includes(searchedText.toLowerCase()) ||
          item.community.address.toLowerCase().includes(searchedText.toLowerCase()) ||
          item.category.toLowerCase().includes(searchedText.toLowerCase())
        )
        setSavedSearchedData(newFilteredData)
      }
      else{
        setSearchActive(false)
        newFilteredData = filtersNow ?  savedFilteredData : data;
        setSavedSearchedData(savedSearchedData)
      }
      setRequestedData(newFilteredData)
    }
    if (type ==='providers') {
      let newSearchedProviders = data;
      if (searchedText) {
        setSearchActive(true);
        newSearchedProviders = newSearchedProviders.filter(item =>
          item.companyName.toLowerCase().includes(searchedText.toLowerCase()) ||
          item.contactPerson.toLowerCase().includes(searchedText.toLowerCase())
        )
      }
      else{
        setSearchActive(false);
        newSearchedProviders = data
      }
      setRequestedData(newSearchedProviders)
    }
  }

  return (
    <>
      <Header
      title={ titles[type].title}
      path='/'
      />
      {isLoading && <LoadingSpinner />}
      {!isLoading &&
      <>
      <StyledContainer>
        <SearchBar onSearch = {handleSearchedText}/>
        {/* <StyledFilter> */}
          { type === 'incidents' && <Filter data={incidentsFilter} onApplyFilters={handleApplyFilters} onClearFilters={handleClearFilters} refreshFilter={refreshFiltersState}/>}
          <StyledCardsContainer>
            {requestedData && requestedData.map((item, i) =>
              <Card
                onClick={ () => navigate(navigateHandler(item)) }
                key={`${type} ${i}`}
                type={type}
                item={item}
              />
            )}
          </StyledCardsContainer>
        {/* </StyledFilter> */}
      </StyledContainer>
      <FloatingButton type={type} />
      </>}
      <Footer type={type} clearData={clearData} />
    </>
  )
}

export default Search