export default function Testimonial({ name, message, id }) {
  return (
    <article key={id}>
      <strong>{name}</strong>
      <p>{message}</p>
    </article>
  );
}
