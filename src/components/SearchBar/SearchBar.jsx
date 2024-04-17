import { useState, useEffect } from "react";
import StyledSearchbarWrap from './styled/SearchbarWrap.js'
import lupa from '../../assets/icons/search.png'
// import './SearchBar.css'

function SearchBar(props) {
  const { onSearch } = props
  const [searchedText, setSearchedText]  = useState('')

  useEffect(() => {
    setSearchedText(searchedText)
  }, [searchedText]);

  function handleChange(typedText) {
    setSearchedText(typedText)
    if(searchedText !== '' && typedText === '') {
      onSearch(typedText)
    }
  }

  function handleKeyDown(event){
    // if (event.key === 'Enter') {
      onSearch(searchedText)
    // }
  };
  return(
    <>
      <StyledSearchbarWrap>
        <img src={lupa} alt="" />
        <input
        type="text"
        value={searchedText}
        onChange={e => handleChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Buscar'
        />
      </StyledSearchbarWrap>
    </>
  )
}

export default SearchBar