function CheckoutForm() {
  return (
    <section className="checkout">
      <h2>Checkout</h2>

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

      <input
        type="text"
        placeholder="City"
      />

      <textarea
        rows="4"
        placeholder="Complete Delivery Address"
      ></textarea>

      <textarea
        rows="3"
        placeholder="Order Notes (Optional)"
      ></textarea>

      <button>Place Order</button>

      <p className="advance-note">
        ⚠ 30% advance payment is required before order
        dispatch. Remaining 70% can be paid through Cash
        on Delivery (COD).
      </p>

      <p
        style={{
          marginTop: "15px",
          fontWeight: "bold",
        }}
      >
        WhatsApp Orders: 0300-5220556
      </p>
    </section>
  );
}

export default CheckoutForm;