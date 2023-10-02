import React from "react"
import { BsCartPlusFill } from "react-icons/bs"
import "./CartButton.css"

function CartButton() {
  return ( 
    <button className="cart-button">
      <BsCartPlusFill/>
      <span className="cart-status">1</span>
    </button>
  )
}

export default CartButton