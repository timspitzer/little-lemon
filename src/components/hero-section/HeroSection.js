import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-layout-helper">
        <h1>Little Lemon</h1>
        <h2>Chigaco</h2>
        <p className="lead-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nostrum
          beatae sint vitae hic atque quo nulla assumenda. Tenetur sapiente sed
          repudiandae natus modi. Praesentium veritatis quo illo voluptatem
          recusandae.
        </p>
        <img
          className="restauran-food"
          src="/icons_assets/restauranfood.jpg"
          alt="food on plate"
        />
        <button>Reserve a Table</button>
      </div>
    </section>
  );
}
