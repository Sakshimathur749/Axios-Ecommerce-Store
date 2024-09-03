import React, { useState, useEffect } from 'react'
import './CSS/DisplayProduct.css'
import { allProducts } from 'src/serives/serives';
import { HomeProduct } from 'src/types/type';

const DisplayProduct = () => {
    const [allproduct, setAllproducts] = useState<HomeProduct[]>([]);
    useEffect(() => {
        async function fetchdata() {
            try {
                const products = await allProducts();
                products && setAllproducts(products);
            } catch (error) {
                console.log(error);
            }
        }
        
        fetchdata() ;
    }, [])


    return (
        <div className='DisplayProduct'>
           <div className="head">
           <h1 >ALL Products </h1>
           </div>

            <div className="Product">
                <div className="left-side">
                   
                </div>
                <div className="right-side ">
                    <ul className='Card' >
                        {allproduct.map(product =>
                            <div className='cardlist' key={product.id}>
                                <div className="image1"><img src={product.image} width="200px" height="280px"  alt="" /></div>
                                <div className="Producttitle"><h4>{product.title}</h4></div>
                                <div className="category"><h5>{product.category}</h5></div>
                                <div className="price"><p>${product.price}</p></div>
                                <div className="button"><button>Add To cart</button></div>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DisplayProduct