import { Link } from "react-router-dom";

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