import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <h1>HI I'M JOHN AND I <br /> SKATE A LOT</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, cumque vitae animi.</p>
    <button className="hero-button">Get in touch</button>
  </div>
      <div className="hero-image">
        <img src="https://preview.colorlib.com/theme/skater/images/hero_3.jpg.webp" alt="Skater" />
      </div>
    </section>
  );
};

export default Hero;
