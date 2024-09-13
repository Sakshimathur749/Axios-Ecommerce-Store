import React, { useEffect, useState ,useContext} from 'react';
import { useParams } from 'react-router-dom';
import { HomeProduct } from 'src/types/type';
import { getallProducts } from 'src/services/serives';
import './ProductDisplay.css'
import { ProductContext } from 'src/Context/ProductContext';

const ProductDisplay = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<HomeProduct | null>(null);
  const data= useContext(ProductContext);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const products = await getallProducts();
        const foundProduct = products?.find((p) => p.id === parseInt(productId || '0'));
        console.log(foundProduct,"Ska");
        setProduct(foundProduct || null);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="CardPage" key={product.id}>
      <div className="image"> <img src={product.image} alt={product.title} /></div>
      <div className="Content">
        <h1>{product.title}</h1>
        <span>Category: {product.category}</span>
        <span>Price: ${product.price}</span>
        <span>Description: {product.description}</span>
        <button onClick={()=>{data?.addToCart(product)}}>Add to Cart</button>
      </div>
    </div>
  )
};

export default ProductDisplay;
