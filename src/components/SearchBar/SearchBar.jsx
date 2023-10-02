import React, { useState, useContext } from "react"
import { BsSearchHeart } from "react-icons/bs"

import "./SearchBar.css"
import fetchProducts from "../../api/FetchProducts"
import AppContext from "../../context/AppContext"

function SearchBar(){
  const { setProducts, setLoading } = useContext(AppContext)
  const [searchValue, setSearchValue] = useState("")

  

  const handleSearch = async (event) => {
    event.preventDefault()
    setLoading(true) 

    const products = await fetchProducts(searchValue)

    setProducts(products)
    setLoading(false)
    setSearchValue("")
  }

  return (
    <form className="search-bar" onSubmit={handleSearch} >

      {name}
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