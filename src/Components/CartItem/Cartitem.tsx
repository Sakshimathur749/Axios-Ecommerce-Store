import React, { useContext } from 'react'
import './Cartitem.css'
import removeicon from '../Asserts/removeicon.png'
import { ProductContext } from 'src/Context/ProductContext'

const Cartitem = () => {
    const data = useContext(ProductContext);

    return (
        <div className="carts">
            <div className='heading'> <h2 >Your Cart <hr /></h2></div>
            <div >
                {data?.cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {data?.cartItems.map((item) => {
                            if (item.quantity > 0) {
                                return <div key={item.id} className='cart' >
                                    <div className="img"> <img src={item.image} alt={item.title} width="100px" height="100px" /></div>
                                    <div className='content'>
                                        <h4>{item.title}</h4>
                                        <p>Category: {item.category}</p>
                                        <p>Price: ${item.price * item.quantity}</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                    <div className="img"> <img onClick={() => { data?.removeFromCart(item.id) }} src={removeicon} width="100px" height="100px" alt="" /></div>
                                </div>
                            }
                        })}
                    </div>
                )}
            </div>
            <div className="Total">
                TotalAmount: {data?.getTotalCartAmount().toFixed(2)}
            </div>
        </div>
    )
}

export default Cartitem