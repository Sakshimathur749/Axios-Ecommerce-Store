import React, { useState, useEffect, useContext } from 'react'
import './CSS/DisplayProduct.css'
import { getallProducts, getallCategories } from 'src/services/serives';
import { category, HomeProduct } from 'src/types/type';

import { Link } from 'react-router-dom';
import { ProductContext } from 'src/Context/ProductContext';

const DisplayProduct = () => {
    const [allproduct, setAllproducts] = useState<HomeProduct[]>([]);
    const [categories, setCategories] = useState<category[]>([])
    const [filter, setFilter] = useState<HomeProduct[]>([]);
    const [selectedcategory, setSelectedcategory] = useState<string>('All');
    const data = useContext(ProductContext);

    useEffect(() => {
        async function fetchdata() {
            try {
                const products = await getallProducts();
                const category = await getallCategories();
                products && setAllproducts(products);
                category && setCategories(category);
                products && setFilter(products);
            } catch (error) {
                console.log(error);
            }
        }

        fetchdata();
    }, [])

    const handleCategoryChange = (category: string) => {
        setSelectedcategory(category);
        if (category === 'All') {
            setFilter(allproduct);
        } else {
            setFilter(allproduct.filter(product => product.category === category));
        }
    };

    return (
        <div className='DisplayProduct'>
            <div className="Head">
                <h2 >All Products</h2><hr />
            </div>

            <div className="Product">
                <div className="left-side">
                    <h1>Categories</h1>
                    <div className="allCat">
                        <li
                            key="all"
                            className={`category ${selectedcategory === 'All' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('All')}
                        >
                            All
                        </li>
                        {categories.map((cat, i) => (
                            <li
                                key={i}
                                className={`category ${selectedcategory === cat ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(cat)}
                            >
                                {cat}
                            </li>
                        ))}
                    </div>
                </div>
                <div className="right-side ">
                    <ul className='Card' >
                        {filter.map(product =>
                            <div className='cardlist' key={product.id}>
                                <Link to={`/product/${product.id}`} className="product-link">
                                    <div className="image1"><img src={product.image} alt={product.title} /></div>
                                    <div className="Producttitle"><h5>{product.title}</h5></div>
                                    <div className="category"><p>{product.category}</p></div>
                                    <div className="price"><p>${product.price}</p></div>
                                </Link>
                                <div className="btn">
                                    <button onClick={() => { data?.addToCart(product) }}>Add to Cart</button>
                                </div>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DisplayProduct 
