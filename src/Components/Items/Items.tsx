import './Items.css'
import React, { useEffect, useState } from 'react';
import { getfetchProducts } from 'src/serives/serives';
import { HomeProduct } from 'src/types/type';


const Items: React.FC = () => {
  const [item, setItem] = useState<HomeProduct[]>([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        const products = await getfetchProducts();
        console.log(products, "hey!");
        products && setItem(products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, [])

  return (
    <div>
      <h1 className='Head'>Top Products </h1>
      <ul>
        {item?.map((product) =>
          <li className='card' key={product.id}>
            <div className="image1"><img src={product.image} width="200px" height="200px" alt="" /></div>
            <div className="title"><h4>{product.title}</h4></div>
            <div className="category"><h5>{product.category}</h5></div>
            <div className="price"><p>${product.price}</p></div>
            <div className="button"><button>Add To cart</button></div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Items