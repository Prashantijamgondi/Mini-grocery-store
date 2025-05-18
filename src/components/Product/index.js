import React from 'react';

const Product = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product.imgUrl} alt={product.name} />
    <h3>{product.name}</h3>
    <p>₹{product.price}</p>
    <p className="category">{product.category}</p>
    <button onClick={() => addToCart(product.name)}>
      Add to Cart
    </button>
  </div>
);

export default Product;
