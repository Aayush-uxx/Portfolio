import "./Projects.css";
import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "MERN",
    image: "/images/crm.png",
    shortDesc:
      "Full-featured e-commerce platform with cart and payment integration",
    longDesc:
      "Still in development phase A complete e-commerce solution built with MERN stack. Features include user authentication, product management, shopping cart, order tracking, payment gateway integration (Stripe), admin dashboard, and responsive design. Implemented JWT for secure authentication, Redux for state management, and MongoDB for data persistence.",
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
    github: "https://github.com/Aayush-uxx/mern-ecommerce",
    challenges:
      "Implemented real-time inventory management and payment gateway integration.",
    solutions:
      "Used WebSockets for real-time updates and Stripe's secure payment API.",
  },
  {
    id: 2,
    title: "Mini CRM",
    category: "MERN",
    image: "/images/crm.jpg",
    shortDesc:
      "A mini crm web application for managing the leads and notes of the customers ",
    longDesc:
      "Use this dummy account for login :'aayush@gmail.com','aayush123'. This project is made in MERN stack and also used Typescript and TailwinCSs. This app helps in creating the leads and notes of the customers and check by the admin to change the satus into new contacted and converted. ",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    features: ["Create leads", "Managing the status"],
    liveDemo: "https://minicrmfront.vercel.app/login",
    github: "https://github.com/Aayush-uxx/FUTURE_FS_02",
    challenges: "Managing all the Realtionship of the customers",
    solutions:
      "Implemented CRUD operation with a very friendly UI for the Admin",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Frontend",
    image: "/images/portfolio.jpg",
    shortDesc: "Modern portfolio with dark mode and animations",
    longDesc:
      "Personal portfolio website showcasing skills and projects. Features dark/light theme, smooth animations, responsive design, contact form with email integration, and project filtering.",
    techStack: ["React.js", "CSS3", "Node.js", "Framer Motion"],
    features: [
      "Dark/Light theme",
      "Smooth animations",
      "Fully responsive",
      "Contact form",
      "Project filtering",
      "SEO optimized",
    ],
    liveDemo:
      "https://portfolioaayush-git-main-aayush-s-projects13.vercel.app/",
    github: "https://github.com/Aayush-uxx/FUTURE_FS_01",
    challenges: "Implementing smooth theme transitions without flash.",
    solutions: "Used CSS variables and React Context for theme management.",
  },
  {
    id: 4,
    title: "Precision cuts",
    category: "MERN",
    image: "/images/salon.JPG",
    shortDesc: "Modern Haircut website",
    longDesc:
      "use Test credential:'aayush@gmail.com','aayush123' for user and 'admin@gmail.com' 'admin123' accountThe objective of this system was to develop the booking system in haircut shop so people don't need to wait when visiting the shop. In traditional system people need to wait for their turn and need to visit early for queue.",
    techStack: ["React.js", "CSS3", "Node.js", "Framer Motion","Next.js"],
    features: [
      "Dark/Light theme",
      "Booking system",
      "Admin panel",
      "Fully responsive",
      "SEO optimized",
    ],
    liveDemo:
      "https://salonfrontend-xi.vercel.app/",
    github: "https://github.com/Aayush-uxx/FUTURE_FS_03",
    challenges: "Implementing Booking System for the user",
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
