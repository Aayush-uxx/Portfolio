import "./Projects.css";
import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCode,
  FaDatabase,
  FaShieldAlt,
  FaMobile,
  FaDesktop,
  FaArrowRight,
} from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "MERN",
    image: "https://via.placeholder.com/600x400",
    shortDesc:
      "Full-featured e-commerce platform with cart and payment integration",
    longDesc:
      "A complete e-commerce solution built with MERN stack. Features include user authentication, product management, shopping cart, order tracking, payment gateway integration (Stripe), admin dashboard, and responsive design. Implemented JWT for secure authentication, Redux for state management, and MongoDB for data persistence.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Stripe API",
    ],
    features: [
      "User authentication & authorization",
      "Product search & filtering",
      "Shopping cart & wishlist",
      "Secure payment integration",
      "Order tracking system",
      "Admin dashboard",
      "Product reviews & ratings",
    ],
    liveDemo: "https://example.com/demo",
    github: "https://github.com/Aayush-uxx/ecommerce",
    challenges:
      "Implemented real-time inventory management and payment gateway integration.",
    solutions:
      "Used WebSockets for real-time updates and Stripe's secure payment API.",
  },
  {
    id: 2,
    title: "Task Management App",
    category: "MERN",
    image: "https://via.placeholder.com/600x400",
    shortDesc: "Collaborative task management with real-time updates",
    longDesc:
      "A Trello-like task management application allowing teams to collaborate effectively. Features include drag-and-drop boards, task assignment, due dates, comments, file attachments, and real-time notifications. Built with Socket.io for real-time updates and MongoDB for data storage.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "TailwindCSS",
    ],
    features: [
      "Drag & drop boards",
      "Real-time updates",
      "Task assignment",
      "Due date reminders",
      "File attachments",
      "Team collaboration",
      "Activity logs",
    ],
    liveDemo: "https://example.com/taskmanager",
    github: "https://github.com/Aayush-uxx/taskmanager",
    challenges:
      "Managing real-time updates across multiple users simultaneously.",
    solutions:
      "Implemented WebSocket connections and optimized database queries.",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    category: "React",
    image: "https://via.placeholder.com/600x400",
    shortDesc: "Analytics dashboard for social media metrics",
    longDesc:
      "Interactive dashboard displaying social media analytics including engagement rates, follower growth, post performance, and audience demographics. Features customizable widgets, data export, and real-time data updates.",
    techStack: [
      "React.js",
      "Chart.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    features: [
      "Real-time analytics",
      "Customizable widgets",
      "Data export (CSV/PDF)",
      "Performance metrics",
      "Audience insights",
      "Report generation",
      "Multi-platform support",
    ],
    liveDemo: "https://example.com/dashboard",
    github: "https://github.com/Aayush-uxx/dashboard",
    challenges:
      "Processing large datasets efficiently for real-time analytics.",
    solutions: "Implemented data caching and optimized API calls.",
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Frontend",
    image: "https://via.placeholder.com/600x400",
    shortDesc: "Modern portfolio with dark mode and animations",
    longDesc:
      "Personal portfolio website showcasing skills and projects. Features dark/light theme, smooth animations, responsive design, contact form with email integration, and project filtering.",
    techStack: ["React.js", "CSS3", "EmailJS", "Framer Motion"],
    features: [
      "Dark/Light theme",
      "Smooth animations",
      "Fully responsive",
      "Contact form",
      "Project filtering",
      "SEO optimized",
    ],
    liveDemo: "https://aayush.dev",
    github: "https://github.com/Aayush-uxx/portfolio",
    challenges: "Implementing smooth theme transitions without flash.",
    solutions: "Used CSS variables and React Context for theme management.",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const categories = ["all", ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="projectsSection" id="projects">
      <div className="projectsHeader">
        <h2>My Projects</h2>
        <p>
          Here are some of my recent projects. Each project showcases different
          skills and technologies I've mastered.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="projectFilters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filterBtn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projectsGrid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="projectCard">
            <div className="projectImage">
              <img src={project.image} alt={project.title} />
              <div className="projectOverlay">
                <button
                  className="viewDetailsBtn"
                  onClick={() => openModal(project)}
                >
                  View Details <FaArrowRight />
                </button>
              </div>
            </div>
            <div className="projectContent">
              <span className="projectCategory">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.shortDesc}</p>
              <div className="projectTech">
                {project.techStack.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="techTag">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="techTag">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
              <div className="projectLinks">
                <button
                  className="projectLinkBtn"
                  onClick={() => openModal(project)}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal/Popup */}
      {showModal && selectedProject && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="modalClose" onClick={closeModal}>
              <FaTimes />
            </button>

            <div className="modalImage">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>

            <div className="modalBody">
              <h2>{selectedProject.title}</h2>
              <span className="modalCategory">{selectedProject.category}</span>

              <div className="modalDescription">
                <h3>Project Overview</h3>
                <p>{selectedProject.longDesc}</p>
              </div>

              <div className="modalFeatures">
                <h3>Key Features</h3>
                <ul>
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="modalTechStack">
                <h3>Technologies Used</h3>
                <div className="techStackGrid">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className="techStackItem">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modalChallenges">
                <h3>Challenges & Solutions</h3>
                <p>
                  <strong>Challenge:</strong> {selectedProject.challenges}
                </p>
                <p>
                  <strong>Solution:</strong> {selectedProject.solutions}
                </p>
              </div>

              <div className="modalActions">
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="liveDemoBtn"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="githubBtn"
                >
                  <FaGithub /> View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
