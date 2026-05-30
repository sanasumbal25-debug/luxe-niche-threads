import React from "react";

function Cart({ cartItems = [] }) {
  // reusable helper (prevents duplication)
  const getSalePrice = (item) => {
    return item.originalPrice - (item.originalPrice * item.discount) / 100;
  };

  const total = cartItems.reduce((sum, item) => {
    return sum + getSalePrice(item);
  }, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>No products selected yet.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>
                <strong>{item.name}</strong>
              </p>

              <p>Rs. {getSalePrice(item).toFixed(0)}</p>
            </div>
          ))}

          <h3>Total: Rs. {total.toFixed(0)}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;