import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section">
      <section>
        <h1 className="display-title">Little Lemon</h1>
        <h2 className="sub-title">Chicago</h2>
        <p className="highlight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          provident consequatur omnis vero, ipsam animi facilis ducimus quo id
          aspernatur, adipisci dignissimos atque veniam deleniti enim, vel
          dolore! Pariatur, sed.
        </p>
      </section>
      <section>
        <img src="/icons_assets/restaurant chef B.jpg" alt="restaurant chef" />
        <img src="/icons_assets/Mario and Adrian A.jpg" alt="restaurant chef" />
      </section>
    </section>
  );
}
