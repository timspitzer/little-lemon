import React from "react";

export default function flowHeroSection() {
  return (
    <section className="hero-section layout">
      <div className="layout-item">
        <h1>Little Lemon</h1>
        <h2>Chigaco</h2>
        <p className="lead-text">
          At our restaurant, we believe that food should not only taste good but
          also be healthy and nutritious. That's why we use only fresh and
          high-quality ingredients in all our dishes.
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
