// src/services/productService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

// Function to fetch products by category
export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/category/${category}`);
    return response.data;  // Return the products fetched from the backend
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

// export default { getProductsByCategory };
