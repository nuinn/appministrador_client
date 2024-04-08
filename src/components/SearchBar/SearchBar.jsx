import { useState } from "react";
import './SearchBar.css'

function SearchBar(props) {
  const [searchedText, setSearchedText]  = useState('')
  const { onSearch } = props
  function handleChange(typedText) {
    setSearchedText(typedText)
    
  }

  function handleKeyDown(event){
    if (event.key === 'Enter') {
      onSearch(searchedText)
    }
  };
  return(
    <>
      <input 
      type="text"
      value={searchedText}
      onChange={e => handleChange(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder={`  Buscar`}
    />
    </>
  )
}

export default SearchBar