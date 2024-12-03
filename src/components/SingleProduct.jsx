import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();  // Get the product ID from the URL
  const [product, setProduct] = useState(null);
const fetchSignleProduct=async()=>{
    const response=await axios.get(`https://fakestoreapi.com/products/${id}`)
    
    setProduct(response.data)
}
  useEffect(() => {
    fetchSignleProduct();
   
      
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
        
          <p>{product.description}</p>
          <span><strong>Category:</strong> {product.category}</span>
          <p><strong>Price: ${product.price}</strong></p>
          <p><strong>Rating: {product.rating.rate}</strong> ({product.rating.count})</p>
          <a href="/products" className="btn btn-secondary">Back to Products</a>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
