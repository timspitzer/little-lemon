import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section">
      <section>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="highlight-text">
          Welcome to our restaurant, where we are committed to serving the
          highest quality food and providing our customers with a memorable
          dining experience. Our restaurant offers a diverse menu of delicious
          dishes inspired by cuisines from around the world. Our experienced
          chefs take pride in using only the freshest and finest ingredients in
          all of our dishes. We work with local farmers and suppliers to source
          the best produce, meats, and seafood to ensure that our dishes are not
          only delicious but also healthy and nutritious.
        </p>
      </section>
      <section>
        <img
          src="/icons_assets/restaurant chef B.jpg"
          alt="restaurant chef"
          width="250"
          height="300"
        />
        <img
          src="/icons_assets/Mario and Adrian A.jpg"
          alt="restaurant chef"
          width="250"
          height="300"
        />
      </section>
    </section>
  );
}
