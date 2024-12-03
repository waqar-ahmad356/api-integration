import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    
  
    
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setFilteredProducts(response.data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    // Fetch categories
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(['All', ...response.data]); 
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
  
   
    const handleCategoryClick = (category) => {
      setActiveCategory(category);
      if (category === 'All') {
        setFilteredProducts(products); 
      } else {
        setFilteredProducts(products.filter((prod) => prod.category === category));
      }
    };
  
    useEffect(() => {
      fetchProducts();
      fetchCategories();
    }, []);
  
    return (
      <div className="container mt-5">
        {/* Categories Navigation */}
        <nav className="mb-4">
          <ul className="nav nav-pills">
            {categories.map((cat, index) => (
              <li className="nav-item" key={index}>
                <button
                  className={`nav-link ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>
  
        {/* Products Grid */}
        <div className="row">
          {filteredProducts.map((prod) => (
            <div className="col-md-4" key={prod.id}>
              <div className="card mb-4">
                <img
                  src={prod.image}
                  className="card-img-top img-fluid"
                  style={{ maxWidth:"100%", height: '270px', objectFit: 'cover' }}
                  alt={prod.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{prod.title}</h5>
                  <p className="card-text description">{prod.description}</p>
                  <p className="card-text">
                    <strong>${prod.price}</strong>
                  </p>
                  <Link to={`/prod/${prod.id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Products
