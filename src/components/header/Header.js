import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/Nav.js";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="layout">
      <div className="layout-item">
        <Link to="/">
          <img
            className="logo"
            src="/icons_assets/logo.svg"
            alt="Little Lemons Logo"
          ></img>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)}>
          <img
            src="/icons_assets/🦆 icon _hamburger menu.svg"
            alt="hamburger menu icon"
            width="20"
          />
        </button>
        <Nav isOpen={isOpen}></Nav>
      </div>
    </header>
  );
}
