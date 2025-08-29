import React, { useContext } from 'react'
import { Cart } from '../../DataContext'

const MyCart = () => {
    let cartItems = useContext(Cart);

  return (

    <>
   

     <ul>
      {
        cartItems.length >0 ? 
        cartItems.map((item,index)=>{
            return <li key={index}>{item}</li>
        })
        :<h1>Cart is empty</h1>
      }
    </ul>
    </>
   
    
  )
}

export default MyCart
