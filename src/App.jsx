import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import Policies from "./pages/Policies";
import Footer from "./components/Footer";

import suit1 from "./assets/suit1.jpg";
import suit1a from "./assets/suit1a.jpg";
import suit2 from "./assets/suit2.jpg";
import suit3 from "./assets/suit3.jpg";
import suit4 from "./assets/suit4.jpg";
import suit5 from "./assets/suit5.jpg";
import suit6 from "./assets/suit6.jpg";
import suit7 from "./assets/suit7.jpg";
import suit8 from "./assets/suit8.jpg";
import suit9 from "./assets/suit9.jpg";
import suit10 from "./assets/suit10.jpg";
import suit11 from "./assets/suit11.jpg";
import suit12 from "./assets/suit12.jpg";

const products = [
  {
    id: 1,
    brand: "SANA FASHION",
    name: "Luxury Lawn Collection",
    originalPrice: 8990,
    discount: 30,
    fabric: "Premium Lawn",
    color: "Teal Blue",
    type: "3 Piece",
    stitched: "Unstitched",
    shirt: "2.5 Meter",
    trouser: "2.5 Meter",
    dupatta: "2.5 Meter",
    images: [suit1, suit1a],
  },
  {
    id: 2,
    brand: "SANA FASHION",
    name: "Summer Lawn Suit",
    originalPrice: 7990,
    discount: 25,
    fabric: "Lawn",
    color: "Black",
    type: "3 Piece",
    stitched: "Stitched",
    shirt: "Medium",
    trouser: "Medium",
    dupatta: "2.5 Meter",
    image: suit2,
  },
  {
    id: 3,
    brand: "SANA FASHION",
    name: "Embroidered Lawn",
    originalPrice: 9990,
    discount: 35,
    fabric: "Lawn",
    color: "Pink",
    type: "3 Piece",
    stitched: "Unstitched",
    shirt: "2.5 Meter",
    trouser: "2.5 Meter",
    dupatta: "2.5 Meter",
    image: suit3,
  },
  {
    id: 4,
    brand: "SANA FASHION",
    name: "Festive Wear",
    originalPrice: 10990,
    discount: 30,
    fabric: "Cotton",
    color: "Maroon",
    type: "3 Piece",
    stitched: "Stitched",
    shirt: "Large",
    trouser: "Large",
    dupatta: "2.5 Meter",
    image: suit4,
  },
  {
    id: 5,
    brand: "SANA FASHION",
    name: "Luxury Pret",
    originalPrice: 12990,
    discount: 40,
    fabric: "Khaddar",
    color: "Olive",
    type: "2 Piece",
    stitched: "Stitched",
    shirt: "Medium",
    trouser: "Medium",
    dupatta: "-",
    image: suit5,
  },
  {
    id: 6,
    brand: "SANA FASHION",
    name: "Elegant Suit",
    originalPrice: 6990,
    discount: 20,
    fabric: "Linen",
    color: "Grey",
    type: "2 Piece",
    stitched: "Unstitched",
    shirt: "2.5 Meter",
    trouser: "2.5 Meter",
    dupatta: "-",
    image: suit6,
  },
  {
    id: 7,
    brand: "SANA FASHION",
    name: "Premium Lawn",
    originalPrice: 8990,
    discount: 30,
    fabric: "Lawn",
    color: "White",
    type: "3 Piece",
    stitched: "Unstitched",
    shirt: "2.5 Meter",
    trouser: "2.5 Meter",
    dupatta: "2.5 Meter",
    soldout: true,
    image: suit7,
  },
  {
    id: 8,
    brand: "SANA FASHION",
    name: "Printed Lawn",
    originalPrice: 5990,
    discount: 15,
    fabric: "Lawn",
    color: "Yellow",
    type: "3 Piece",
    stitched: "Unstitched",
    shirt: "2.5 Meter",
    trouser: "2.5 Meter",
    dupatta: "2.5 Meter",
    image: suit8,
  },
  {
    id: 9,
    brand: "SANA FASHION",
    name: "Luxury Cotton",
    originalPrice: 7490,
    discount: 20,
    fabric: "Cotton",
    color: "Blue",
    type: "2 Piece",
    stitched: "Stitched",
    shirt: "Large",
    trouser: "Large",
    dupatta: "-",
    image: suit9,
  },
  {
    id: 10,
    brand: "SANA FASHION",
    name: "Signature Collection",
    originalPrice: 13990,
    discount: 35,
    fabric: "Premium Lawn",
    color: "Purple",
    type: "3 Piece",
    stitched: "Unstitched",
    shirt: "2.5 Meter",
    trouser: "2.5 Meter",
    dupatta: "2.5 Meter",
    image: suit10,
  },
  {
    id: 11,
    brand: "SANA FASHION",
    name: "Designer Lawn",
    originalPrice: 11990,
    discount: 30,
    fabric: "Lawn",
    color: "Peach",
    type: "3 Piece",
    stitched: "Stitched",
    shirt: "Medium",
    trouser: "Medium",
    dupatta: "2.5 Meter",
    image: suit11,
  },
  {
    id: 12,
    brand: "SANA FASHION",
    name: "Classic Lawn",
    originalPrice: 7990,
    discount: 25,
    fabric: "Lawn",
    color: "Green",
    type: "3 Piece",
    stitched: "Unstitched",
    shirt: "2.5 Meter",
    trouser: "2.5 Meter",
    dupatta: "2.5 Meter",
    image: suit12,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [gridView, setGridView] = useState(4); // Default to 4 product columns

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  // WORKABLE SORTING LOGIC: Calculates sorting states perfectly
  const sortedProducts = [...products];

  if (sortOption === "low-high") {
    sortedProducts.sort((a, b) => {
      const priceA = a.originalPrice - (a.originalPrice * a.discount) / 100;
      const priceB = b.originalPrice - (b.originalPrice * b.discount) / 100;
      return priceA - priceB;
    });
  }

  if (sortOption === "high-low") {
    sortedProducts.sort((a, b) => {
      const priceA = a.originalPrice - (a.originalPrice * a.discount) / 100;
      const priceB = b.originalPrice - (b.originalPrice * b.discount) / 100;
      return priceB - priceA;
    });
  }

  if (sortOption === "discount") {
    sortedProducts.sort((a, b) => b.discount - a.discount);
  }

  return (
    <>
      <Navbar cartCount={cartItems.length} />

      <Hero />

      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />

      <div className="section-title">
        <h2>NEW ARRIVALS</h2>
      </div>

      {/* FILTER BLOCK - ALIGNED TO THE RIGHT */}
      <div className="shop-toolbar">
        <div className="toolbar-controls">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="sort-select"
          >
            <option value="default">Sort Products ▼</option>
            <option value="low-high">Price Low → High</option>
            <option value="high-low">Price High → Low</option>
            <option value="discount">Highest Discount</option>
          </select>

          {/* Grid symbols layout options */}
          <div className="grid-toggle-icons">
            <button 
              className={`icon-btn ${gridView === 1 ? 'active' : ''}`}
              onClick={() => setGridView(1)} 
              title="1 Column Layout"
            >
              ▥
            </button>
            <button 
              className={`icon-btn ${gridView === 2 ? 'active' : ''}`}
              onClick={() => setGridView(2)} 
              title="2 Columns Layout"
            >
              ▦
            </button>
            <button 
              className={`icon-btn ${gridView === 4 ? 'active' : ''}`}
              onClick={() => setGridView(4)} 
              title="4 Columns Layout"
            >
              ☷
            </button>
          </div>
        </div>
      </div>

      {/* WORKABLE GRID DISPLAY CONTROLLER */}
      <section className={`products grid-${gridView}`}>
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </section>

      <CheckoutForm />

      <Policies />

      <Footer />

      <a
        href="https://wa.me/923377190902"
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default App;