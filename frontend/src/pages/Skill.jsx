import "./Skill.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaBootstrap,
  FaPhp,
  FaImage,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

function Skill() {
  return (
    <section className="skillsSection">
      <div className="skillsHeader">
        <h2>Skills & Expertise</h2>
        <p>
          Technologies, tools, and professional skills I use to build modern
          digital solutions.
        </p>
      </div>

      <div className="skillsContainer">
        <div className="skillsCategory">
          <h3>Frontend Development</h3>

          <div className="skillsGrid">
            <div className="skillCard">
              <FaHtml5 />
              <span>HTML5</span>
            </div>

            <div className="skillCard">
              <FaCss3Alt />
              <span>CSS3</span>
            </div>

            <div className="skillCard">
              <FaJs />
              <span>JavaScript</span>
            </div>

            <div className="skillCard">
              <FaReact />
              <span>React.js</span>
            </div>

            <div className="skillCard">
              <SiNextdotjs />
              <span>Next.js</span>
            </div>

            <div className="skillCard">
              <SiTypescript />
              <span>TypeScript</span>
            </div>

            <div className="skillCard">
              <SiTailwindcss />
              <span>Tailwind CSS</span>
            </div>

            <div className="skillCard">
              <FaBootstrap />
              <span>Bootstrap</span>
            </div>
          </div>
        </div>

        <div className="skillsCategory">
          <h3>Backend & Database</h3>

          <div className="skillsGrid">
            <div className="skillCard">
              <FaNodeJs />
              <span>Node.js</span>
            </div>

            <div className="skillCard">
              <SiMongodb />
              <span>MongoDB</span>
            </div>

            <div className="skillCard">
              <SiMysql />
              <span>MySQL</span>
            </div>

            <div className="skillCard">
              <FaPhp />
              <span>PHP (Beginner)</span>
            </div>

            <div className="skillCard">
              <span>☕</span>
              <span style={{ margin: "10px" }}>Java (Intermediate)</span>
            </div>
          </div>
        </div>

        <div className="skillsCategory">
          <h3>Tools & Software</h3>

          <div className="skillsGrid">
            <div className="skillCard">
              <FaGitAlt />
              <span>Git</span>
            </div>

            <div className="skillCard">
              <FaGithub />
              <span>GitHub</span>
            </div>

            <div className="skillCard">
              <FaImage />
              <span>VS Code</span>
            </div>

            <div className="skillCard">
              <FaFigma />
              <span>Figma</span>
            </div>

            <div className="skillCard">
              <FaImage />
              <span>Canva</span>
            </div>

            <div className="skillCard">
              <FaImage />
              <span>Photoshop</span>
            </div>
          </div>
        </div>

        <div className="skillsCategory">
          <h3>Additional Skills</h3>

          <div className="skillsGrid">
            <div className="skillCard">
              <span>🤖</span>
              <span>AI Prompting</span>
            </div>

            <div className="skillCard">
              <span>📝</span>
              <span>Documentation</span>
            </div>

            <div className="skillCard">
              <span>🎬</span>
              <span>Video Editing</span>
            </div>

            <div className="skillCard">
              <span>📷</span>
              <span>Photo Editing</span>
            </div>

            <div className="skillCard">
              <span>🐞</span>
              <span>Debugging</span>
            </div>

            <div className="skillCard">
              <span>🔗</span>
              <span>API Integration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Languages */}

      <div className="languageSection">
        <h3>Languages</h3>

        <div className="languageList">
          <div>Nepali — Expert</div>
          <div>English — Conversational</div>
          <div>Hindi — Intermediate</div>
        </div>
      </div>

      {/* Summary */}

      <div className="skillsSummary">
        <p>
          I specialize in MERN Stack development and modern web technologies.
          Beyond software development, I have experience in UI design,
          documentation, AI-assisted workflows, content creation, debugging,
          photo editing, video editing, and project presentation.
        </p>
      </div>
    </section>
  );
}

export default Skill;
