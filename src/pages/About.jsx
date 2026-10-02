import { Link } from "react-router-dom";
import product from "../data/product.json"

function About() {
return (
<div className="about-page">

  <section className="about-hero">
    <p className="about-label">ABOUT TASK NAIJA</p>

    <h1>
      Shopping made
      <br />
      simple for Naija.
    </h1>

    <p>
      Task Naija is an online shopping platform built to
      make discovering and buying everyday products simple,
      convenient, and enjoyable.
    </p>
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
                
                  to={`/product/${product.id}`}
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

  <section className="about-content">

    <div className="about-card">
      <h2>Our Mission</h2>

      <p>
        Our goal is to create a smooth shopping experience
        where customers can discover products, place orders,
        and keep track of their purchases without unnecessary
        complications.
      </p>
    </div>


    <div className="about-card">
      <h2>Why Task Naija?</h2>

      <p>
        We believe online shopping should be straightforward.
        From browsing products to checkout and order tracking,
        every part of the experience is designed with
        simplicity in mind.
      </p>
    </div>

    <div className="about-card">
      <h2>Built for Naija</h2>

      <p>
        Task Naija is designed with Nigerian shoppers in mind,
        combining a modern online shopping experience with
        the everyday needs of customers in Nigeria.
      </p>
    </div>

  </section>

  <section className="about-cta">
    <h2>Ready to start shopping?</h2>

    <p>
      Explore our products and find something you'll love.
    </p>

    <Link to="/">
      Shop Now
    </Link>
  </section>

</div>

);
}

export default About;