import React from 'react'

import {useState} from 'react'
import {Cart} from "../context/CartContext"


const CartPage = () => {
  let CartItems= useContext(Cart)
  return (
<div>
      {CartItems.map((cart,index)=>{
return (<h2>{cart}</h2>)
      })}
    </div>
    
   
  )
}

export default CartPage
