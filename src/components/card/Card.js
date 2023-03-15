import React from "react";

export default function Card({ title, price, description, img, id }) {
  return (
    <article className="card" key={id}>
      <img src={img} alt="dish"></img>
      <div className="text">
        <div className="header">
          <h3>{title}</h3>
          <span>${price}</span>
        </div>
        <div className="description">
          <p>{description}</p>
          <button>Order a delivery </button>
        </div>
      </div>
    </article>
  );
}
