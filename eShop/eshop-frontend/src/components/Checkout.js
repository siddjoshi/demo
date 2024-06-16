import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const [shippingDetails, setShippingDetails] = useState({ name: '', address: '', city: '', zip: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  const handleCheckout = () => {
    // For the purpose of this demo, we will just clear the cart and navigate to a success page
    dispatch({ type: 'CLEAR_CART' });
    navigate('/success');
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Shipping Details</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={shippingDetails.name} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" name="address" value={shippingDetails.address} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <input type="text" className="form-control" name="city" value={shippingDetails.city} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">ZIP Code</label>
              <input type="text" className="form-control" name="zip" value={shippingDetails.zip} onChange={handleInputChange} />
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Order Summary</h2>
          {cart.map((product) => (
            <div key={product.id} className="d-flex justify-content-between">
              <span>{product.title}</span>
              <span>${product.price}</span>
            </div>
          ))}
          <hr />
          <div className="d-flex justify-content-between">
            <strong>Total</strong>
            <strong>${cart.reduce((sum, product) => sum + product.price, 0).toFixed(2)}</strong>
          </div>
          <button className="btn btn-primary mt-3" onClick={handleCheckout}>Confirm Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
