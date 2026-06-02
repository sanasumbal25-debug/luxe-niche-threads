import { useState } from "react";
import { Link } from "react-router-dom";

function Cart({ cartItems = [], removeFromCart }) {
  const [cartOpen, setCartOpen] = useState(false);

  console.log("Cart Open:", cartOpen);
  const total = cartItems.reduce((sum, item) => {
    const salePrice =
      item.originalPrice -
      (item.originalPrice * item.discount) / 100;

    return sum + salePrice;
  }, 0);

  return (
    <div className="cart-container">

      <button
        className="cart-toggle"
        onClick={() => setCartOpen(!cartOpen)}
      >
        🛒 Cart ({cartItems.length})
      </button>

      {cartOpen && (
  <div
    className="cart-box"
    style={{
      background: "white",
      border: "3px solid red",
      padding: "20px",
      margin: "20px",
      color: "black",
    }}
  >

          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
  <p>No products selected yet.</p>
) : (
  <>
    {cartItems.map((item, index) => (
      <div
        key={index}
        className="cart-item"
      >
        <div className="cart-product-info">

  <img
    src={
      item.images
        ? item.images[0]
        : item.image
    }
    alt={item.name}
    className="cart-product-image"
  />

  <div>

    <strong>{item.name}</strong>

    <p>{item.brand}</p>

    <p>
      Rs.
      {(
        item.originalPrice -
        (item.originalPrice *
          item.discount) /
          100
      ).toFixed(0)}
    </p>

  </div>
          <div className="qty-box">
            <button>-</button>

            <span>1</span>

            <button>+</button>
          </div>
        </div>

        <button
          className="remove-btn"
          onClick={() =>
            removeFromCart(index)
          }
        >
          Remove
        </button>
      </div>
    ))}

    <h3>
      Total: Rs. {total.toFixed(0)}
    </h3>

    <Link to="/checkout">
      <button className="checkout-btn">
        Proceed To Checkout
      </button>
    </Link>
  </>
)}
</div>
      )}
</div>
  );
}

export default Cart;