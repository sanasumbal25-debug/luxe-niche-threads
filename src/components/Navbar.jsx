function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">LUXE NICHE THREADS</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>New Arrivals</li>
        <li>Unstitched</li>
        <li>Pret</li>
        <li>Luxury</li>
        <li>Sale</li>
        <li>Contact</li>
      </ul>

      <div className="cart-icon">
        🛒 Cart ({cartCount})
      </div>
    </nav>
  );
}

export default Navbar;