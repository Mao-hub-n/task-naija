function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>Task Naija</h2>
          <p>
            Simple shopping, made easy.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/cart">Cart</a>
          <a href="/checkout">Checkout</a>
        </div>

        <div className="footer-section">
          <h3>Categories</h3>
          <p>Electronics</p>
          <p>Clothing</p>
          <p>Shoes</p>
          <p>Gifts</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@tasknaija.com</p>
          <p>Phone: +234 815 434 8744</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Task Naija. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;