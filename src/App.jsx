import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import Policies from "./pages/Policies";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import OrderSuccess from "./pages/OrderSuccess";
import InstagramGallery from "./components/InstagramGallery";

import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
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
    brand: "SAPPHIRE",
    name: "Luxury Lawn Collection",
    originalPrice: 8990,
    discount: 30,
    fabric: "Premium Lawn",
    color: "Teal Blue",
    type: "3 Piece",
    Stitched: "Unstitched",
    category: "Luxery",
    shirt: "2.5 Meter",
    trouser: "2.5 Meter",
    dupatta: "2.5 Meter",
    soldOut: false,
    images: [suit1, suit1a],
  },
  {
    id: 2,
    brand: "NISHAT LINEN",
    name: "Summer Lawn Suit",
    originalPrice: 7990,
    discount: 25,
    fabric: "Lawn",
    color: "Black",
    type: "3 Piece",
    stitched: "Stitched",
    category: "Stitched",
    shirt: "Medium",
    trouser: "Medium",
    dupatta: "2.5 Meter",
    availableSizes: ["M", "L", "XL"],
    soldOut: false,
    image: suit2,
  },
  {
    id: 3,
    brand: "ADAN LIBAS",
    name: "Embroidered Lawn",
    originalPrice: 9990,
    discount: 35,
    fabric: "Lawn",
    color: "Pink",
    type: "3 Piece",
    stitched: "Unstitched",
    category: "Lawn",
    shirt: "2.5 Meter",
    trouser: "2.5 Meter",
    dupatta: "2.5 Meter",
    soldOut: true,
    image: suit3,
  },
  {
    id: 4,
    brand: "SHA POSH",
    name: "Festive Wear",
    originalPrice: 10990,
    discount: 30,
    fabric: "Cotton",
    color: "Maroon",
    type: "3 Piece",
    stitched: "Stitched",
    category: "Pret",
    shirt: "Large",
    trouser: "Large",
    dupatta: "2.5 Meter",
    soldOut: true,
    image: suit4,
  },
  {
    id: 5,
    brand: "JAZMIN",
    name: "Luxury Pret",
    originalPrice: 12990,
    discount: 40,
    fabric: "Khaddar",
    color: "Olive",
    type: "2 Piece",
    stitched: "Stitched",
    category: "Pret",
    shirt: "Medium",
    trouser: "Medium",
    dupatta: "-",
    soldOut: true,
    image: suit5,
  },
  {
    id: 6,
    brand: "SAPPHIRE",
    name: "Elegant Suit",
    originalPrice: 6990,
    discount: 20,
    fabric: "Linen",
    color: "Grey",
    type: "2 Piece",
    stitched: "Unstitched",
    category: "Pret",
    shirt: "2.5 Meter",
    trouser: "2.5 Meter",
    dupatta: "-",
    soldOut: true,
    image: suit6,
  },
  {
    id: 7,
    brand: "SAPPHIRE",
    name: "Premium Lawn",
    originalPrice: 8990,
    discount: 30,
    fabric: "Lawn",
    color: "White",
    type: "3 Piece",
    stitched: "Unstitched",
    category: "Pret",
    shirt: "2.5 Meter",
    trouser: "2.5 Meter",
    dupatta: "2.5 Meter",
    soldOut: true,
    image: suit7,
  },
  {
    id: 8,
    brand: "NISHAT LINEN",
    name: "Printed Lawn",
    originalPrice: 5990,
    discount: 15,
    fabric: "Lawn",
    color: "Yellow",
    type: "3 Piece",
    stitched: "Unstitched",
    category: "Pret",
    shirt: "2.5 Meter",
    trouser: "2.5 Meter",
    dupatta: "2.5 Meter",
    soldOut: true,
    image: suit8,
  },
  {
    id: 9,
    brand: "SAPPHIRE",
    name: "Luxury Cotton",
    originalPrice: 7490,
    discount: 20,
    fabric: "Cotton",
    color: "Blue",
    type: "2 Piece",
    stitched: "Stitched",
    category: "Pret",
    shirt: "Large",
    trouser: "Large",
    dupatta: "-",
    soldOut: true,
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
    category: "Pret",
    shirt: "2.5 Meter",
    trouser: "2.5 Meter",
    dupatta: "2.5 Meter",
    availableSizes: [],
    soldOut: true,
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
    category: "lawn",
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
    category: "Pret",
    shirt: "2.5 Meter",
    trouser: "2.5 Meter",
    dupatta: "2.5 Meter",
    image: suit12,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] =
  useState("All");
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

  <Routes>

    <Route
  path="/success"
  element={<OrderSuccess />}
/>

    <Route
      path="/"
      element={
        <>
          <Hero />

          <div className="section-title">
            <h2>NEW ARRIVALS</h2>
          </div>
          <div className="category-filter">

  <button
    onClick={() =>
      setSelectedCategory("All")
    }
  >
    All
  </button>

  <button
    onClick={() =>
      setSelectedCategory("Pret")
    }
  >
    Pret
  </button>

  <button
    onClick={() =>
      setSelectedCategory("Unstitched")
    }
  >
    Unstitched
  </button>

  <button
    onClick={() =>
      setSelectedCategory("Luxury")
    }
  >
    Luxury
  </button>

  <button
    onClick={() =>
      setSelectedCategory("Sale")
    }
  >
    Sale
  </button>

</div>
          <div className="shop-toolbar">
            <div className="toolbar-controls">

              <select
                value={sortOption}
                onChange={(e) =>
                  setSortOption(e.target.value)
                }
                className="sort-select"
              >
                <option value="default">
                  Sort Products ▼
                </option>

                <option value="low-high">
                  Price Low → High
                </option>

                <option value="high-low">
                  Price High → Low
                </option>

                <option value="discount">
                  Highest Discount
                </option>

              </select>

            </div>
          </div>

          <section
            className={`products grid-${gridView}`}
          >
            {sortedProducts
  .filter(
    (product) =>
      selectedCategory === "All" ||
      product.category ===
        selectedCategory
  )
  .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </section>

        </>
      }
    />

    <Route
  path="/cart"
  element={
    <CartPage
      cartItems={cartItems}
      removeFromCart={removeFromCart}
    />
  }
/>

    <Route
  path="/checkout"
  element={
    <Checkout
      cartItems={cartItems}
    />
  }
/>

    <Route
      path="/policies"
      element={<Policies />}
    />

    <Route
      path="/contact"
      element={<Contact />}
    />

    <Route
      path="/about"
      element={<AboutUs />}
    />

  </Routes>

  <Reviews />

  <InstagramGallery />
  
  <Footer />
</>
  );
}

export default App;