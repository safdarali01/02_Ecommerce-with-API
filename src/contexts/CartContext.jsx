import React, {createContext, useState, useEffect} from 'react'

//create context 
export const CartContext = createContext();

const CartProvider = ({children}) => {
  // cart state
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <CartContext.Provider value={'this is the cart context'}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
