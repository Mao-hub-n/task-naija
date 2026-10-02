import {Link} from "react-router-dom";
import { useState } from "react";

function Navbar ({cart})  {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = cart.reduce(
    (total, product) => total + product.quantity, 0
  );
  return (

    <nav className="navbar">
  <div className="navbar-container">

    <Link
      to="/"
      className="navbar-logo"
    >
      TASK NAIJA
    </Link>

    <button 
    className="menu-btn"
    onClick={() => setMenuOpen(!menuOpen)}> 
      =
    </button>

    <div className={`nav-links ${menuOpen ? "active" : ""}
  `}>

      <Link to="/" 
      onClick={() => setMenuOpen(false)}>
        Home
      </Link>

      <Link to="/orders"
      onClick={() => setMenuOpen(false)}>
        My Orders
      </Link>

      <Link to="/about"
      onClick={() => setMenuOpen(false)}>
        About
      </Link>

      <Link
        to="/cart"
        className="navbar-cart"
        onClick={() => setMenuOpen(false)}
      >
        Cart🛒
          ({cartCount})
        {cart.length > 0 && (
          <span className="cart-count">
            {cart.reduce(
              (total, item) =>
                total + item.quantity,
              0
            )}
          </span>
        )}
      </Link>

      <Link to="/login" onClick={() => setMenuOpen(false)}>
  Login
</Link>

<Link to="/register" onClick={() => setMenuOpen(false)}>
  Register
</Link>


    </div>

  </div>
</nav>
  )
}

export default Navbar
