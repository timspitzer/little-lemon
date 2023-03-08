import Nav from "../nav/Nav.js";

export default function Header({ children }) {
  return (
    <header>
      <img src="/icons_assets/logo.svg" alt="Little Lemon Logo"></img>
      <Nav></Nav>
    </header>
  );
}
