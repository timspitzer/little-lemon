import React from "react";
import Card from "../card/Card.js";

const specials = [
  {
    name: "Greek Salad",
    description: "Lorem ipsum",
    price: 0,
    img: "/icons_assets/greek salad.jpg",
  },
  {
    name: "Bruchetta",
    description: "Lorem ipsum",
    price: 0,
    img: "/icons_assets/bruchetta.svg",
  },
  {
    name: "Greek Salad",
    description: "Lorem ipsum",
    price: 0,
    img: "/icons_assets/lemon dessert.jpg",
  },
];

const specialsWithId = specials.map((special) => ({
  ...special,
  id: crypto.randomUUID(),
}));

export default function HighlightsSection() {
  return (
    <section className="highlights-section">
      <h1>Specials</h1>
      <button>Online Menu</button>
      {specialsWithId.map(({ name, price, description, img, id }) => (
        <Card
          key={id}
          title={name}
          price={price}
          description={description}
          img={img}
        ></Card>
      ))}
    </section>
  );
}
