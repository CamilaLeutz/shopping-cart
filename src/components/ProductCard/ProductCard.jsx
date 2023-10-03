import React, { useContext } from "react"
import { BiCartAlt } from "react-icons/bi"
import propTypes from "prop-types"
import "./ProductCard.css"
import formatCurrency from "../../utils/formatCurrency"
import AppContext from "../../context/AppContext"


function ProductCard({ data }) {
  const { title, thumbnail, price } = data

  const { cartItems, setCartItems} = useContext(AppContext)

  const handleAddCart = () => setCartItems([ ...cartItems, data ])

  return (
    <section className="product-card">
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="product" className="card__img" />
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, "BRL")}</h2>
        <h2 className="card__title">{title}</h2>
        
      </div>

      <button 
        type="button" 
        className="button__add-cart"
        onClick={ handleAddCart }
      >
        
        <BiCartAlt/>
      </button>

    </section>
  )
}

export default ProductCard

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired