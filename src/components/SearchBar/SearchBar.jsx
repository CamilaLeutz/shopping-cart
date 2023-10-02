import React, { useState } from "react"
import { BsSearchHeart } from "react-icons/bs"

import "./SearchBar.css"
import fetchProducts from "../../api/FetchProducts"

function SearchBar(){

  const [searchValue, setSearchValue] = useState("")

  const handleSearch = async (event) => {
    event.preventDefault()
   
    const products = await fetchProducts(searchValue)
    console.log(products)
    setSearchValue("")
  }

  return (
    <form className="search-bar" onSubmit={handleSearch} >
      <input type="search" 
        value={searchValue}
        placeholder="Buscar produtos" 
        className="search-input"
        onChange={ ({ target }) => setSearchValue(target.value) }
        required
      />

      <button type="submit" 
        className="search-button">
        <BsSearchHeart/>
      </button>
    </form>
  )
}

export default SearchBar