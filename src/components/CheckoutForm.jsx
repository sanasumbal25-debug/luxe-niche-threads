function Checkout() {
  return (
    <div className="checkout-page">

      <h1>Checkout</h1>

      <form className="checkout-form">

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="tel"
          placeholder="Phone Number"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <textarea
          placeholder="Delivery Address"
        />

        <button type="submit">
          Place Order
        </button>

      </form>

    </div>
  );
}

export default Checkout;