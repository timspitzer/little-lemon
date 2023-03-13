import React from "react";
import Testimonial from "../testimonial/Testimonial.js";

const testimonials = [
  {
    name: "Hans",
    message: "Awesome food",
    id: crypto.randomUUID(),
  },
  {
    name: "Lotte",
    message: "Bad service",
    id: crypto.randomUUID(),
  },
  {
    name: "Magnus",
    message: "Best salad ever",
    id: crypto.randomUUID(),
  },
];

export default function TestimonialSection() {
  return (
    <section className="testimonials-section">
      {testimonials.map(({ rating, name, message, id }) => (
        <Testimonial
          key={id}
          rating={rating}
          name={name}
          message={message}
        ></Testimonial>
      ))}
    </section>
  );
}
