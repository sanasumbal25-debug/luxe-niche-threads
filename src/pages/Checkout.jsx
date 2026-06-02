import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cartItems = [] }) {
  const shippingFee = 250;

const subtotal = cartItems.reduce(
  (sum, item) => {
    const salePrice =
      item.originalPrice -
      (item.originalPrice * item.discount) / 100;

    return sum + salePrice;
  },
  0
);

const total = subtotal + shippingFee;

const advanceAmount = (total * 30) / 100;

const fullAdvanceAmount = total;

const navigate = useNavigate();

const [paymentMethod, setPaymentMethod] =
  useState("cod");

const [formData, setFormData] = useState({
  fullName: "",
  phone: "",
  email: "",
  city: "",
  address: "",
});

  // Fixed and restored your handleChange function
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Combined your duplicate blocks into one clean submission flow
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Order Submitted Successfully!");

    const message = `
🛍 NEW ORDER - LUXE NICHE THREADS

Customer Name:
${formData.fullName}

Phone:
${formData.phone}

Email:
${formData.email}

City:
${formData.city}

Address:
${formData.address}

Payment Method:
${paymentMethod}

Order Total:
Rs. ${total}

Shipping:
Rs. ${shippingFee}

Thank You.
`;

    const whatsappUrl = `https://wa.me/923377190902?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      city: "",
      address: "",
    });

    navigate("/success");
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />

        <select name="city" required onChange={handleChange}>
          <option value="">Select Your City</option>
          <option>Lahore</option>
          <option>Karachi</option>
          <option>Islamabad</option>
          <option>Rawalpindi</option>
          <option>Faisalabad</option>
          <option>Multan</option>
          <option>Sialkot</option>
          <option>Gujranwala</option>
          <option>Bahawalpur</option>
          <option>Peshawar</option>
          <option>Quetta</option>
          <option>Hyderabad</option>
          <option>Sargodha</option>
        </select>

        {/* Cleaned up the broken <textarea div> block here */}
        <div>
          {/* Payment Screenshot Upload */}
          <label htmlFor="payment-proof">Payment Screenshot</label>
          <input
            id="payment-proof"
            type="file"
            accept="image/*"
            name="paymentScreenshot"
            required
            onChange={handleChange}
          />

          {/* Delivery Address Input */}
          <textarea
            name="address"
            placeholder="Complete Delivery Address"
            required
            onChange={handleChange}
          />
        </div>

        {/* ORDER SUMMARY */}
        <div className="order-summary">
          <h2>Order Summary</h2>

          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div key={index} className="summary-item">
                  <span>{item.name}</span>
                  <span>
                    Rs.{" "}
                    {(
                      item.originalPrice -
                      (item.originalPrice * item.discount) / 100
                    ).toFixed(0)}
                  </span>
                </div>
              ))}

              <hr />

              <div className="summary-item">
                <strong>Subtotal</strong>
                <strong>Rs. {subtotal.toFixed(0)}</strong>
              </div>

              <div className="summary-item">
                <strong>Shipping</strong>
                <strong>Rs. {shippingFee}</strong>
              </div>

              <div className="summary-item">
                <strong>Grand Total</strong>
                <strong>Rs. {total.toFixed(0)}</strong>
              </div>
            </>
          )}
        </div>

        {/* PAYMENT METHOD */}
        <div className="payment-section">
          <h2>Select Payment Method</h2>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="cod">Cash On Delivery</option>
            <option value="advance">Full Advance Payment</option>
            <option value="bank">Bank Transfer</option>
          </select>
        </div>

        <div className="payment-info">
          {paymentMethod === "cod" && (
            <>
              <h3>Cash On Delivery</h3>
              <p>30% Advance Required:</p>
              <strong>Rs. {advanceAmount.toFixed(0)}</strong>
              <p>Remaining amount payable on delivery.</p>
            </>
          )}

          {paymentMethod === "advance" && (
            <>
              <h3>Full Advance Payment</h3>
              <p>Free Delivery Eligible</p>
              <strong>Rs. {fullAdvanceAmount.toFixed(0)}</strong>
            </>
          )}

          {paymentMethod === "bank" && (
            <>
              <h3>Bank Transfer</h3>
              <p>Send payment screenshot on WhatsApp after transfer.</p>
            </>
          )}
        </div>

        {/* SHIPPING INFO */}
        <div className="shipping-info">
          <h3>Delivery & Payment Information</h3>
          <p>Nationwide Delivery Available Across Pakistan</p>
          <p>
            Delivery Time: <strong> 3–7 Working Days</strong>
          </p>
          <p>
            Shipping Charges: <strong> Rs. 250</strong>
          </p>

          <hr />
          <h4>JazzCash</h4>
          <p>
            Account Number: <strong> 03005220556</strong>
          </p>
          <p>
            Account Title: <strong> Shahid Majeed</strong>
          </p>

          <hr />
          <h4>EasyPaisa</h4>
          <p>
            Account Number: <strong> 03359933449</strong>
          </p>
          <p>
            Account Title: <strong> Shahid Majeed</strong>
          </p>

          <hr />
          <h4>Allied Bank</h4>
          <p>Bank transfer available on request.</p>
        </div>

        <div className="checkout-buttons">
          <button type="submit" className="confirm-order-btn">
            Place Order
          </button>

          <a
            href={`https://wa.me/923377190902?text=Hello, I would like to place an order from Luxe Niche Threads.`}
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="whatsapp-order-btn">
              Order on WhatsApp
            </button>
          </a>
        </div>
      </form>
    </div>
  );
} // Added missing closing bracket for component function

export default Checkout;