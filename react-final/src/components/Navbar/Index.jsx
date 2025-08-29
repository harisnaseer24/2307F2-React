import React, { useContext } from 'react'
import { Cart } from '../../DataContext'

const Navbar = () => {
let cartItems = useContext(Cart)

  return (
    <div>
        <h1>MyWeb</h1>
    <h2>total cart items: {cartItems.length}</h2>
      
    </div>
  )
}

export default Navbar
