import "./Header.css";
import { useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <h2>Welcome to my Portfolio</h2>
      </div>

      <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>

      <nav className={`navLinks ${menuOpen ? "active" : ""}`}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skill">Skill</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button
        className="themeBtn"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </header>
  );
}

export default Header;
