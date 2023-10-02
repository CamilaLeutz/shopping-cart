const fetchProducts = async (query) => { //busca pela api, retornando os produtos (results)

  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
  const data = await response.json()

  return data.results
}

export default fetchProducts