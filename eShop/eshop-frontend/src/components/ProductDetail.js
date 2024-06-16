import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleBuyNow = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    navigate('/cart');
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <button className="btn btn-primary me-2" onClick={handleAddToCart}>Add to Cart</button>
          <button className="btn btn-success" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
