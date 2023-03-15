import { Link } from "react-router-dom";
import Nav from "../nav/Nav.js";

export default function Header({ children }) {
  return (
    <header>
      <Link to="/">
        <img
          className="logo"
          src="/icons_assets/logo.svg"
          alt="Little Lemons Logo"
        ></img>
      </Link>
      <Nav></Nav>
    </header>
  );
}
