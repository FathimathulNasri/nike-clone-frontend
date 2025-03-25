// frontend/src/components/AddProductForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/AddProductForm.css'
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    const {id} = useParams()
    const [productData, setProductData] = useState({
        name: '',
        price: '',
        description: '',
        image: '',
        category: '',
        product_details: '',
        sizes: [],
        offer: '',
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
    
          .then(response => {
            setProductData(response.data.product);
          })
          .catch(error => {
            console.error('Error fetching product:', error);
          });
      }, []);

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showSizeSelector, setShowSizeSelector] = useState(false); // State to toggle visibility of size selector

    const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL','UK 1.5','UK 2.5','UK 3','UK 3.5','UK 4','UK 4.5','UK 5','UK 5.5','UK 6','UK 6.5','UK 7.5','UK 8','UK 8.5','UK 9','UK 9.5','UK 10','UK 10.5','UK 11','UK 11.5','UK 12']; // List of available sizes

    // const availableSizes = 'xl'


    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({
            ...productData,
            [name]: value,
        });
    };


    // Handle size change
    const handleSizeChange = (e) => {
        const { value } = e.target;
        const updatedSizes = productData.sizes.includes(value)
            ? productData.sizes.filter((size) => size !== value) // Remove size
            : [...productData.sizes, value]; // Add size
        setProductData({
            ...productData,
            sizes: updatedSizes,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const token = localStorage.getItem('token'); // Get token from localStorage

        if (!token) {
            setError('You need to be logged in to add products');
            setLoading(false);
            return;
        }

        try {
            // Post product data to the backend with the admin token
            const response = await axios.put(`http://localhost:5000/api/products/edit/${id}`,
                productData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                    },
                }
            );

            if (response.status === 201) {
                setProductData({
                    name: '',
                    price: '',
                    description: '',
                    image: '',
                    category: '',
                    product_details: '',
                    sizes: [],
                    offer: '',
                });
                alert('Product added successfully!');
            }
        } catch (err) {
            setError('Error adding product. Please try again.');
        }
        setLoading(true);
    };

    return (
        <div className="add-product-form">
            <h2>Add Product</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Product Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={productData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={productData.price}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={productData.description}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image URL:</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={productData.image}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
                        name="category"
                        value={productData.category}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Sneakers">Sneakers</option>
                        <option value="Football">Football Shoes</option>
                        <option value="Running">Running Shoes</option>
                        <option value="Basketball">Basketball Shoes</option>
                        <option value="GymandTraining">Gym and Training</option>
                        <option value="BagandBackpacks">Bag and Backpacks</option>
                        <option value="Sandals-Slides">Sandals and Slides</option>
                        <option value="T-Shirts">Tops and T-Shirts</option>
                        <option value="Shorts">Shorts</option>
                        <option value="PantsandLeggings">Pants and Leggings</option>
                        <option value="Meternity">Nike Meternity</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Socks">Socks</option>
                        <option value="HatsandHeadwear">Hats and Headwear</option>
                    </select>
                </div>


                  <div className="form-group">
                    <label 
                        type="text" 
                        className="size-selector-toggle" 
                        onClick={() => setShowSizeSelector(!showSizeSelector)}
                    >
                        {showSizeSelector ? ' Size Selector :' : 'Select Sizes :'}
                    </label>

                    {showSizeSelector && (
                        <div className="checkbox-group">
                            {availableSizes.map((size) => (
                                <label key={size}>
                                    <input
                                        type="checkbox"
                                        value={size}
                                        checked={productData.sizes.includes(size)}
                                        onChange={handleSizeChange}
                                    />
                                    {size}
                                </label>
                            ))}
                        </div>
                    )}
                </div> 



                <div className="form-group">
                    <label htmlFor="product_details">Product Details:</label>
                    <textarea
                        id="product_details"
                        name="product_details"
                        value={productData.product_details}
                        onChange={handleInputChange}
                        required
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="offer">Offer:</label>
                    <input
                        type="text"
                        id="offer"
                        name="offer"
                        value={productData.offer}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit" disabled={loading}>
                    Edit
                </button>
            </form>
        </div>
    );
};

export default EditProduct;