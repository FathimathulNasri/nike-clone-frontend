import axios from 'axios';

const API_URL = 'https://nike-clone-backend-nahc.onrender.com';
const token = localStorage.getItem('token')

// Function to fetch products by category
export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/api/products/category/${category}`);
    return response.data;  // Return the products fetched from the backend
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

// export default { getProductsByCategory };

export const deleteProduct = async(id)=>{
  try{
    const response = await axios.delete(`${API_URL}/api/products/delete/${id}`,
      {
        headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
    }
    );
    alert(response.data.message)
  }
  catch(err){
    alert(err.message)
  }
}