import "./Experience.css";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description:
      "Lead development of microservices architecture serving 100K+ users. Implemented CI/CD pipelines reducing deployment time by 60%.",
    technologies: ["React", "Node.js", "AWS", "Docker"],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple web applications. Collaborated with design team to implement responsive UI components.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Firebase"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2019 - 2020",
    description:
      "Developed client websites and e-commerce platforms. Optimized performance achieving 95+ Lighthouse scores.",
    technologies: ["JavaScript", "HTML/CSS", "WordPress", "Shopify"],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="role">{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="description">{exp.description}</p>
                <div className="technologies">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
