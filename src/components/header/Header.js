import Nav from "../nav/Nav.js";

export default function Header({ children }) {
  return (
    <header>
      <img
        className="logo"
        src="/icons_assets/logo.svg"
        alt="Little Lemons Logo"
      ></img>
      <Nav></Nav>
    </header>
  );
}
