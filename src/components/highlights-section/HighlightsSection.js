import React from "react";
import Card from "../card/Card.js";

const specials = [
  {
    name: "Greek Salad",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas id, officiis ducimus soluta quos tenetur velit consequatur nulla possimus culpa, sed quibusdam reiciendis repellat aperiam iste dicta iure ratione.",
    price: 12.99,
    img: "/icons_assets/greek salad.jpg",
  },
  {
    name: "Bruchetta",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas id, officiis ducimus soluta quos tenetur velit consequatur nulla possimus culpa, sed quibusdam reiciendis repellat aperiam iste dicta iure ratione.",
    price: 5.99,
    img: "/icons_assets/bruchetta.svg",
  },
  {
    name: "Lemon Dessert",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas id, officiis ducimus soluta quos tenetur velit consequatur nulla possimus culpa, sed quibusdam reiciendis repellat aperiam iste dicta iure ratione.",
    price: 5.0,
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
      <div className="highlights-header">
        <h1 className="display-title">This weeks specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {specialsWithId.map(({ name, price, description, img, id }) => (
          <Card
            key={id}
            title={name}
            price={price}
            description={description}
            img={img}
          ></Card>
        ))}
      </div>
    </section>
  );
}
