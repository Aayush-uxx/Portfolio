import "./About.css";

function About() {
  return (
    <section className="aboutSection">
      <div className="aboutHeader">
        <h2>About Me</h2>
        <p>Get to know more about my journey and expertise.</p>
      </div>

      <div className="aboutContainer">
        <div className="aboutContent">
          <h3>MERN Stack Developer</h3>

          <p>
            I am Aayush Chaudhary, a passionate MERN Stack Developer focused on
            building scalable and responsive web applications. I enjoy creating
            modern user experiences while developing efficient backend systems
            using MongoDB, Express.js, React.js, and Node.js.
          </p>

          <p>
            I have experience working with REST APIs, authentication systems,
            database integration, error handling, debugging, and full-stack
            application development. I continuously improve my skills by
            building real-world projects and learning modern development
            practices.
          </p>

          <div className="aboutHighlights">
            <div className="highlight">✓ REST API Development</div>

            <div className="highlight">✓ Authentication & Authorization</div>

            <div className="highlight">✓ MongoDB Database Design</div>

            <div className="highlight">✓ React Frontend Development</div>

            <div className="highlight">✓ Error Handling & Debugging</div>

            <div className="highlight">✓ Git & GitHub Version Control</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
