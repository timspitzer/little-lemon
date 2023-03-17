import React from "react";
import Card from "../card/Card.js";

const specials = [
  {
    name: "Greek Salad",
    description:
      "Craving a fresh and healthy salad? Look no further than our Greek salad! Made with crisp lettuce, juicy tomatoes, sliced cucumbers, and tangy Kalamata olives, our salad is topped with crumbled feta cheese and a zesty vinaigrette dressing.",
    price: 12.99,
    img: "/icons_assets/greek salad.jpg",
  },
  {
    name: "Bruchetta",
    description:
      "Try our bruschetta! Made with freshly toasted bread and topped with a flavorful combination of diced tomatoes, garlic, and basil, it's the perfect blend of savory and tangy.",
    price: 5.99,
    img: "/icons_assets/bruchetta.svg",
  },
  {
    name: "Lemon Dessert",
    description:
      "Looking for a tangy dessert? Try our lemon dessert made with fresh lemons for a sweet and sour taste. Perfect for any occasion, it's a refreshing and light option that's sure to please. Order online today and taste the zesty flavors for yourself!",
    price: 5.0,
    img: "/icons_assets/lemon dessert.jpg",
  },
];

const specialsWithIdAndFixedDecimal = specials
  .map((special) => ({
    ...special,
    id: crypto.randomUUID(),
  }))
  .map((special) => ({ ...special, price: special.price.toFixed(2) }));

export default function HighlightsSection() {
  return (
    <section className="highlights-section layout-item">
      <div className="highlights-header">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {specialsWithIdAndFixedDecimal.map(
          ({ name, price, description, img, id }) => (
            <Card
              key={id}
              title={name}
              price={price}
              description={description}
              img={img}
            ></Card>
          )
        )}
      </div>
    </section>
  );
}
