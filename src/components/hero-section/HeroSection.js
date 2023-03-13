import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-layout-helper">
        <h1 className="display-title">Little Lemon</h1>
        <h2 className="sub-title">Chigaco</h2>
        <p className="section-categories">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nostrum
          beatae sint vitae hic atque quo nulla assumenda. Tenetur sapiente sed
          repudiandae natus modi. Praesentium veritatis quo illo voluptatem
          recusandae.
        </p>
        <button>Reserve a Table</button>
        <img
          className="restauran-food"
          src="/icons_assets/restauranfood.jpg"
          alt="food on plate"
        />
      </div>
    </section>
  );
}
