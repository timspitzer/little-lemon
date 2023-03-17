import Nav from "../nav/Nav.js";

export default function Footer() {
  return (
    <footer className="layout">
      <div className="layout-item">
        <section>
          <img src="/icons_assets/restaurant.jpg" alt="restaureant wide shot" />
        </section>
        <section>
          <h3>Doormat Navigation</h3>
          <Nav></Nav>
        </section>
        <section>
          <h3>Contact</h3>
          <ul>
            <li>Adress</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </section>
        <section>
          <h3>Social Media Links</h3>
          <ul>
            <li>Adress</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
