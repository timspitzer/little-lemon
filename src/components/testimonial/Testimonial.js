export default function Testimonial({ name, message, id }) {
  return (
    <article className="testimonial" key={id}>
      <strong>{name}</strong>
      <p>{message}</p>
    </article>
  );
}
