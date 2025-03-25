import axios from 'axios'

const API_URL = 'https://nike-clone-backend-nahc.onrender.com';
const token = localStorage.getItem('token')

export const addtoCartService = async(productId)=>{
    try{
        const cart = await axios.post(`${API_URL}/api/cart/`,{productId:productId},
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                },
            })
    return cart.data.message
    }
    catch(err){
        alert(err.message)
    }
    
}

export const getCartService = async()=>{
    try{
        const cart = await axios.get(`${API_URL}/api/cart/`,
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                },
            })
    return cart.data
    }
    catch(err){
        alert(err.message)
    }
}

export const removeCartService = async(productId)=>{
    try{
        const cart = await axios.delete(`${API_URL}/api/cart/${productId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                },
            })
    return cart.data
    }
    catch(err){
        alert(err.message)
    }
}

export const cleartCartService = async()=>{
    try{
         await axios.delete(`${API_URL}/api/cart/cart-clear`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
    return "cart cleared"
    }
    catch(err){
         console.error("Error clearing cart: ", err);
        alert(err)
    }
}