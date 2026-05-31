import "./Header.css";
import { useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <h2>Welcome to my Portfolio</h2>
      </div>

      <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`navLinks ${menuOpen ? "active" : ""}`}>
        <a href="#hero" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#skill" onClick={closeMenu}>
          Skills
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
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
