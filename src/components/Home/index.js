import React, { Component } from 'react';

import products from '../../products';
import CategoryFilter from '../CategoryFilter';
import ProductList from '../ProductList';
import Cart from '../Cart';
import Header from '../Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCat: 'All',
      cart: JSON.parse(localStorage.getItem('cart')) || {}
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cart !== this.state.cart) {
      localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }
  }

  get categories() {
    return ['All', ...new Set(products.map(p => p.category))];
  }

  get filteredProducts() {
    return this.state.selectedCat === 'All' 
      ? products 
      : products.filter(p => p.category === this.state.selectedCat);
  }

  addToCart = productName => {
    this.setState(prevState => ({
      cart: {
        ...prevState.cart,
        [productName]: (prevState.cart[productName] || 0) + 1
      }
    }));
  };

  removeFromCart = productName => {
    const newCart = { ...this.state.cart };
    if (newCart[productName] > 1) {
      newCart[productName] -= 1;
    } else {
      delete newCart[productName];
    }
    this.setState({ cart: newCart });
  };

  render() {
    return (
      <div className='app'>
        <Header />
        <div className="main-content">
          <div className="product-section">
            <CategoryFilter 
              categories={this.categories}
              selected={this.state.selectedCat}
              onSelect={(category) => this.setState({ selectedCat: category })}
            />
            <ProductList 
              products={this.filteredProducts}
              addToCart={this.addToCart}
            />
          </div>
          <Cart 
            cart={this.state.cart} 
            products={products}
            removeFromCart={this.removeFromCart}
          />
        </div>
      </div>
    );
  }
}

export default Home;
