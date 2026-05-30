import "./Header.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <h2>Aayush</h2>
      </div>

      <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>

      <nav className={`navLinks ${menuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skill">Skill</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
