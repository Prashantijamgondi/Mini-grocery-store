import React from 'react';
import Product from '../Product';

const ProductList = ({ products, addToCart }) => (
  <div className="product-list">
    {products.map(product => (
      <Product 
        key={product.name}
        product={product}
        addToCart={addToCart}
      />
    ))}
  </div>
);

export default ProductList;