// src/components/OrderList.js

import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get('/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <div>
              <h3>Order ID: {order.id}</h3>
              <p>Total Amount: ${order.total_amount}</p>
              <p>Status: {order.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
