import Header from "../layout/Header";
import Footer from "../layout/Footer";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skill from "./Skill";

function Home() {
  return (
    <>
      <Header />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
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
