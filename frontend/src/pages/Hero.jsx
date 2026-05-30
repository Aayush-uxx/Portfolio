import "./Hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="heroContent">
        <p className="heroGreeting">Hello, I'm</p>

        <h1 className="heroName">Aayush</h1>

        <h2 className="heroRole">MERN Stack Developer</h2>

        <p className="heroDescription">
          Building responsive and scalable web applications using MongoDB,
          Express.js, React.js and Node.js.
        </p>

        <div className="heroButtons">
          <a href="#projects" className="primaryBtn">
            View Projects
          </a>

          <a href="#contact" className="secondaryBtn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="heroImage">
        <img src="/profile.png" alt="Aayush" />
      </div>
    </section>
  );
}

export default Hero;
