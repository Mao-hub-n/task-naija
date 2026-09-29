import { Link } from "react-router-dom";
import product from '../data/product.json'

function Landing({ products }) {
return (
<div className="home-page">

  {/* Hero */}
  <section className="home-hero">
    <div className="hero-content">

      <p className="hero-label">
        WELCOME TO TASK NAIJA 🇳🇬
      </p>

      <h1>
        Shop Smart.
        <br />
        Shop Naija.
      </h1>

      <p className="hero-description">
        Discover products you'll love and enjoy a
        simple shopping experience from start to finish.
      </p>

      <Link
        to="/"
        className="hero-button"
      >
        Shop Now
      </Link>

    </div>
  </section>


  {/* Categories */}
  <section className="home-section">

    <div className="section-heading">
      <div>
        <p className="section-label">
          EXPLORE
        </p>

        <h2>
          Shop by Category
        </h2>
      </div>
    </div>

    <div className="category-grid">

      <Link
        to="/"
        className="category-card"
      >
        <span>🧸</span>
        <h3>Plushies</h3>
        <p>Something soft and fun.</p>
      </Link>

      <Link
        to="/"
        className="category-card"
      >
        <span>🥤</span>
        <h3>Cups</h3>
        <p>Drink in your own style.</p>
      </Link>

      <Link
        to="/"
        className="category-card"
      >
        <span>🎁</span>
        <h3>Gift Cards</h3>
        <p>Give someone something special.</p>
      </Link>

    </div>

  </section>


  {/* Featured Products */}
  <section className="home-section">

    <div className="section-heading">

      <div>
        <p className="section-label">
          SHOP
        </p>

        <h2>
          Featured Products
        </h2>
      </div>

      <Link to="/">
        View All →
      </Link>

    </div>

    <div className="home-product-grid">

      {product?.slice(0, 4).map((product) => (

        <div
          className="home-product-card"
          key={product.id}
        >

          <div className="product-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-info">

            <h3>
              {product.name}
            </h3>

            <p>
              ${product.price}
            </p>

            <Link
              to={`/products/${product.id}`}
            >
              View Product
            </Link>

          </div>

        </div>

      ))}

    </div>

  </section>


  {/* Why Task Naija */}
  <section className="why-section">

    <p className="section-label">
      WHY TASK NAIJA?
    </p>

    <h2>
      Shopping without the headache.
    </h2>

    <div className="why-grid">

      <div className="why-card">
        <span></span>
        <h3>Easy Ordering</h3>
        <p>
          Find what you want and place your order
          without unnecessary steps.
        </p>
      </div>

      <div className="why-card">
        <span></span>
        <h3>Simple & Secure</h3>
        <p>
          Your shopping experience stays straightforward
          from checkout to order tracking.
        </p>
      </div>

      <div className="why-card">
        <span></span>
        <h3>Track Your Orders</h3>
        <p>
          Keep an eye on your orders from processing
          to delivery.
        </p>
      </div>

    </div>

  </section>


  {/* CTA */}
  <section className="home-cta">

    <h2>
      Ready to shop?
    </h2>

    <p>
      Explore Task Naija and discover your next purchase.
    </p>

    <Link to="/">
      Start Shopping
    </Link>

  </section>

</div>

);
}

export default Landing;