import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section">
      <section>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="highlight-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          provident consequatur omnis vero, ipsam animi facilis ducimus quo id
          aspernatur, adipisci dignissimos atque veniam deleniti enim, vel
          dolore! Pariatur, sed.
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
