import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowUp,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Skill from "../pages/Skill";

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      {showScrollTop && (
        <button className="scrollTopBtn" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      <div className="footerContainer">
        <div className="footerColumn">
          <h3 className="footerLogo">Aayush Chaudhary</h3>
          <p className="footerDescription">
            MERN Stack Developer focused on building scalable and responsive web
            applications with modern technologies.
          </p>
          <div className="footerContact">
            <div className="footerContactItem">
              <FaEnvelope />
              <span>xaayush977@gmail.com</span>
            </div>
            <div className="footerContactItem">
              <FaMapMarkerAlt />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>
        </div>

        <div className="footerColumn">
          <h4>Quick Links</h4>
          <ul className="footerLinks">
            <li>
              <a href="#hero" id="hero">
                Home
              </a>
            </li>
            <li>
              <a href="#about" id="about">
                About
              </a>
            </li>
            <li>
              <a href="#skill" id="skill">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" id="contact">
                Contact
              </a>
            </li>
            <li>
              <a href="#projects" id="projects">
                Projects
              </a>
            </li>
          </ul>
        </div>

        <div className="footerColumn">
          <h4>Tech Stack</h4>
          <ul className="footerLinks">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="footerColumn">
          <h4>Connect With Me</h4>
          <div className="footerSocial">
            <a
              href="https://github.com/Aayush-uxx"
              target="_blank"
              rel="noreferrer"
              className="socialIcon"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/aayush-chaudhary-13941332a/"
              target="_blank"
              rel="noreferrer"
              className="socialIcon"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/youurs_aayush/"
              target="_blank"
              rel="noreferrer"
              className="socialIcon"
            >
              <FaInstagram />
            </a>
            <a href="mailto:xaayush977@gmail.com" className="socialIcon">
              <FaEnvelope />
            </a>
          </div>

          <div className="footerNewsletter">
            <h4>Stay Updated</h4>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>&copy; {currentYear} Aayush Chaudhary. All rights reserved.</p>
        <p className="madeWith">
          Work with Aayush <FaHeart className="heartIcon" />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
