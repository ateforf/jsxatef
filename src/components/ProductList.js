// src/components/ProductList.js
import React from 'react';
import Product from './product';
import image1 from '../assets/1.JPEG'
import image2 from '../assets/2.JPEG'
import image3 from '../assets/3.JPEG'

const products = [
  {
    
    image: image1,
    price: 199.999,
    icon : image1,
    name:"p1"
  },
  {
   
    image: image2,
    price: 299.999,
    icon: image2,
    name:"p2"
  },
  {

  image: image3,
  price: 299.999,
  icon: image3,
  name:"p3"
},
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
