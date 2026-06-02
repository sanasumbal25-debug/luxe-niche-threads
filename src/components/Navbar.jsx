import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <div className="logo">
          LUXE NICHE THREADS
        </div>
        
       <Link to="/cart" className="cart-icon">
  🛒 Cart ({cartCount})
</Link>
      </nav>

      {/* CATEGORY BAR */}

      <div className="category-bar">
  <a href="#">NEW ARRIVALS</a>
  <a href="#">UNSTITCHED</a>
  <a href="#">PRET</a>
  <a href="#">LUXURY</a>
  <a href="#">SALE</a>
  <a href="#">WESTERN</a>
  <a href="#">COLLECTION</a>
</div>

      {/* SIDE MENU */}

      {menuOpen && (
        <div className="side-menu">

          <div
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </div>

          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Policies</li>
            <li>Contact Us</li>
          </ul>

        </div>
      )}
    </>
  );
}

export default Navbar;