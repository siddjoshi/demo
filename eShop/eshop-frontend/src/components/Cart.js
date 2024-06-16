import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleRemoveFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div className="row">
            {cart.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100">
                  <img src={product.image} className="card-img-top" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                    <button className="btn btn-danger" onClick={() => handleRemoveFromCart(product)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/checkout" className="btn btn-primary mt-3">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
