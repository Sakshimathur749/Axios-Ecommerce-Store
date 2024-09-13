import './Items.css'
import React, { useEffect, useState } from 'react';
import { getfetchProducts } from 'src/services/serives';
import { HomeProduct } from 'src/types/type';
import { Link } from 'react-router-dom';
import ApiServices from 'src/services';


const Items: React.FC = () => {
  const [item, setItem] = useState<HomeProduct[]>([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        const products = await ApiServices.fetchaAllProducts();
        products && setItem(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, [])

  return (
    <div className='item'>
      <h1 className='Header'>Top Products </h1>
      <ul>
        {item?.map((product) =>
            <Link to={`/product/${product.id}`} >
          <li className='card' key={product.id}>
            <div className="image1"><img src={product.image} width="200px" height="200px" alt="" /></div>
            <div className="title"><h5>{product.title}</h5></div>
            <div className="category"><p>{product.category}</p></div>
            <div className="price"><p>${product.price}</p></div>
          </li>
          </Link>
        )}
      </ul>
    </div>
  )
}

export default Items