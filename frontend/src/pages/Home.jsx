import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skill from "./Skill";

function Home({ theme, setTheme }) {
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skill">
        <Skill />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
export default Home;
