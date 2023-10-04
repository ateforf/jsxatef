// src/components/Product.js
import React from 'react';

const Product = (props) => {
  const { name, image, price, icon } = props.product;

  const handleClick = () => {
    alert(`You clicked on ${name}. Price: $${price}`);
  };

  return (
    <div className="product" onClick={handleClick}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <img src={icon} alt={`${name} icon`} />
    </div>
  );
};

export default Product;
