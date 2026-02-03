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
      "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjhjMDkzNGQ3OGFjODE5MTkyYmY4ZDBlMjQwNGY2OTk6ZmlsZV8wMDAwMDAwMDIwODA2MjBhOTVhMzU5YzBjNTgxMjZiMSIsInRzIjoiNDg4MTgwIiwicCI6InB5aSIsImNpZCI6IjEiLCJzaWciOiI5YWEzYTgxY2FmYjFlYmYwMmZlMTk5NTM3MjNjZTQ2NmE1ODA0ZjQ2YjQ0OGI2ODM2NmJiMmYwYWQ1ODAzOWZhIiwidiI6IjAiLCJnaXptb19pZCI6bnVsbCwiY3AiOm51bGx9",
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
    demoUrl: "#", // todo
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
