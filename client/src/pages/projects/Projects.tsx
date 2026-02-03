import "./Projects.css";
import { Github } from "lucide-react";

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string | null;
  githubUrl: string | null;
}

const projects: ProjectItem[] = [
  {
    title: "Metapp",
    description:
      "Created a website for bar ordering in a team of 4 people. Users can use the app to order drinks, and bar staff can see and respond to orders live.",
    image:
      "https://user-images.githubusercontent.com/38752330/138086211-440679d8-1250-4147-8975-6caea305a2d9.png",
    technologies: ["TypeScript", "React", "Sass", "Node.js", "MongoDB"],
    demoUrl: null,
    githubUrl: "https://github.com/evkade/metapp",
  },
  {
    title: "Stage Me Up",
    description:
      "Developed an app for a startup in a team of 8 people, to match event organizers and artists.",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23e2e8f0'/%3E%3Ctext x='300' y='200' text-anchor='middle' dominant-baseline='middle' fill='%236b7280' font-family='sans-serif' font-size='20'%3ENo image%3C/text%3E%3C/svg%3E",
    technologies: [
      "JavaScript",
      "React Native",
      "Firebase authentication",
      "Redux",
      "HTML",
      "CSS",
    ],
    demoUrl: null,
    githubUrl: null,
  },
  {
    title: "Personal website",
    description: "This website :)",
    image:
      "https://i.postimg.cc/d3HsQ7j6/Capture-d-e-cran-2025-09-09-a-21-42-49.png", // todo
    technologies: ["TypeScript", "React", "CSS", "HTML"],
    demoUrl: null,
    githubUrl: "https://github.com/evkade/cv",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <Github className="icon" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
