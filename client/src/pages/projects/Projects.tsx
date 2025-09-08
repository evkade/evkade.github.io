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
      "https://user-images.githubusercontent.com/38752330/138086211-440679d8-1250-4147-8975-6caea305a2d9.png", // todo
    technologies: ["TypeScript", "React", "Sass", "Node.js", "MongoDB"],
    demoUrl: null,
    githubUrl: "https://github.com/evkade/metapp",
  },
  {
    title: "Stage Me Up",
    description:
      "Developed an app for a startup in a team of 8 people, to match event organizers and artists.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop", // todo
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
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop", // todo
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
