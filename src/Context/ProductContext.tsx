import React, { createContext, ReactNode, useState } from 'react'
import { HomeProduct } from 'src/types/type'

interface CardContextType {
  cartItems: HomeProduct[];
  addToCart: (product: HomeProduct) => void;
  removeFromCart: (productId: number) => void;
  getTotalCartAmount: () => number,
  getTotalItem:()=>number
}

export const ProductContext = createContext<CardContextType | undefined>(undefined)

const ProductContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<HomeProduct[]>([])
   const addToCart = (product: HomeProduct) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = (productId: number) => {
    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem && existingItem.quantity > 1) {
      setCartItems(cartItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      setCartItems(cartItems.filter(item => item.id !== productId));
    }
  };
  const getTotalCartAmount = () => {
   return cartItems.reduce((total,item)=> total + item.price * item.quantity, 0)
   
  };
  const getTotalItem =()=>{
    return cartItems.reduce((total,item)=> total +  item.quantity, 0)
  }

  return (
    <ProductContext.Provider value={{ addToCart, cartItems, removeFromCart, getTotalCartAmount, getTotalItem }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider