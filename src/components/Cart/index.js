import React from 'react';

const Cart = ({ cart, products, removeFromCart }) => {
  const cartItems = Object.entries(cart);
  const total = cartItems.reduce((sum, [name, quantity]) => {
    const product = products.find(p => p.name === name);
    return sum + (parseInt(product.price) * quantity);
  }, 0);

  return (
    <div className="cart">
      <h2>Cart Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(([name, quantity]) => {
            const product = products.find(p => p.name === name);
            return (
              <div key={name} className="cart-item">
                <span>{name} x{quantity}</span>
                <span>₹{(parseInt(product.price) * quantity).toFixed(2)}</span>
                <button onClick={() => removeFromCart(name)}>Remove</button>
              </div>
            );
          })}
          <div className="total">
            Total: ₹{total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;