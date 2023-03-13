import React from "react";

export default function Card({ title, price, description, img, id }) {
  return (
    <article key={id}>
      <img src={img} alt="dish"></img>
      <div>
        <h3>{title}</h3>
        <span>${price}</span>
      </div>
      <p>{description}</p>
      <button>Order a delivery</button>
    </article>
  );
}
