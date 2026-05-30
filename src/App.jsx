import suit1 from "./assets/suit1.jpg";
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
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import Policies from "./components/Policies";
import Footer from "./components/Footer";

const products = [
  {
    id: 1,
    brand: "Luxe Niche Threads",
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
    image: suit1,
  },
  {
    id: 2,
    brand: "Luxe Niche Threads",
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
    brand: "Luxe Niche Threads",
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
    brand: "Luxe Niche Threads",
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
    brand: "Luxe Niche Threads",
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
    brand: "Luxe Niche Threads",
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
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  return (
  <>
    <Navbar cartCount={cartItems.length} />

    <Hero />

    <Cart cartItems={cartItems} />

    <section className="products">
      {products.map((product) => (
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
  </>
);
}

export default App;
