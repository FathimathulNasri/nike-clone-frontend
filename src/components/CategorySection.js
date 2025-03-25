// src/components/CategorySection.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CategorySection.css';

const categories= ['Jordan','Running','Football', 'Sandals-Slides']
const clothes= ['T-Shirts','GymandTraining','PantsandLeggings','Maternity']
const accessories= [ 'BagandBackpacks','Socks','HatsandHeadwear']

    //   const categories= ['football','running','basketball','Jordan','sneakers','football','tennis','skateboard','gym&training','tshirts','accessorries',
    //     'maternity','plussize','sandals&slides','shorts','pants&leggings']
const CategorySection = () => {
  return (
    <section className="categories">
        <div className="categories-container">
            <h3>Shop by Shoes</h3>
            <div className="category-list">
                { categories.map((category) => 
                    <div key={category} className="category-item" id={category}>
                        <Link to={`/category/${category}`}>
                            <button className="shop-item">{category}</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>

        <div className="categories-container">
        <h3>Shop by Accessories</h3>
            <div className="category-list">
                { accessories.map((accessory) => 
                    <div key={accessory} className="category-item" id={accessory}>
                        <Link to={`/category/${accessory}`}>
                            <button className="shop-item">{accessory}</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
        
        <div className="categories-container">
        <h3>Shop by Clothes</h3>
            <div className="category-list">
                { clothes.map((cloth) => 
                    <div key={cloth} className="category-item" id={cloth}>
                        <Link to={`/category/${cloth}`}>
                            <button className="shop-item">{cloth}</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>

    </section>
  );
};

export default CategorySection;
/* <div className="category-item" id="running">
          <Link to="/category/running">
            <button className="shop-item">Running</button>
            </Link>
        </div> */

        /* <div className="category-item" id="running">
          <Link to={`/category/${category[1]}`}>
            <button className="shop-item">Jordan</button>
            </Link>
        </div>
        <div className="category-item" id="football">
          <Link to="/category/football">
          <button className="shop-item">Football</button>
          </Link>
        </div>
        <div className="category-item" id="running">
          <Link to="/category/skateboarding">
            <button className="shop-item">Skateboarding</button>
            </Link>
        </div><div className="category-item" id="running">
          <Link to="/category/running">
            <button className="shop-item">Gym & Training</button>
            </Link>
        </div><div className="category-item" id="basketball">
          <Link to="/category/basketball">
            <button className="shop-item">Basketball</button>
            </Link>
        </div> */