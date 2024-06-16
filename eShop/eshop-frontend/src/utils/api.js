// src/utils/api.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend URL
  timeout: 10000, // Timeout after 10 seconds
});

export default instance;
