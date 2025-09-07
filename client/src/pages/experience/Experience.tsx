import "./Experience.css";

import { JSX } from "react";

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string | JSX.Element;
  technologies: string[];
};

export const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Meta – London, UK",
    period: "September 2022 – Present",
    description: (
      <>
        <p>
          Full-stack developer in the Test Infra team (12 people), which builds
          continuous integration tools used by all software engineers at Meta.
        </p>
        <p>
          Stack: JavaScript, React.js, GraphQL, Rust, MySQL, PHP, Jest, bash.
        </p>
        <ul>
          <li>
            Owner of Issue Tracker, analyzing test quality and sending tasks to
            test owners.
          </li>
          <li>
            Design and implement mid- to large-size features from concept to
            release, including project planning and release management.
          </li>
          <li>
            Manage and maintain Jira for feature requests, bugs, and system
            improvements.
          </li>
          <li>
            Review design documents and support onboarding of new engineers.
          </li>
          <li>
            Key contributor to projects, refactoring legacy code, and promoting
            code quality.
          </li>
        </ul>
      </>
    ),
    technologies: [
      "JavaScript",
      "React.js",
      "GraphQL",
      "Rust",
      "MySQL",
      "PHP",
      "Jest",
      "bash",
    ],
  },
  {
    title: "ML Engineer",
    company: "Entecon – Stockholm",
    period: "January 2022 – June 2022",
    description: (
      <>
        <p>
          Fine-tuned an NLP deep learning model for generating engaging article
          headlines, as part of my master’s thesis.
        </p>
      </>
    ),
    technologies: ["Python", "Huggingface", "bash"],
  },
  {
    title: "Content Manager and Team Lead",
    company: "Studieresan – Stockholm",
    period: "August 2021 – June 2022",
    description: (
      <>
        <p>
          Led a team of 6, overseeing photography, graphic design, and content
          creation for the project’s social media and website.
        </p>
        <p>I organized the work using a scrum-based approach.</p>
      </>
    ),
    technologies: [
      "Photography",
      "Graphic Design",
      "Content Management",
      "Scrum",
    ],
  },
  {
    title: "Teacher Assistant",
    company: "KTH – Stockholm",
    period: "August 2020 – December 2021",
    description: (
      <>
        <p>
          Assisted students with learning web development, tested code, and
          graded projects.
        </p>
      </>
    ),
    technologies: ["JavaScript", "React", "Vue", "HTML", "CSS"],
  },
  {
    title: "Software Engineer Intern",
    company: "Meta – London",
    period: "June 2021 – August 2021",
    description: (
      <>
        <p>
          Created new features in the Facebook Business Media Library for
          storing and organizing media used in ads.
        </p>
      </>
    ),
    technologies: ["JavaScript", "React.js", "PHP", "GraphQL", "Jest"],
  },
  {
    title: "R&D Intern",
    company: "Ericsson – Stockholm",
    period: "June 2020 – August 2020",
    description: (
      <>
        <p>
          Automated a manual process of converting data from Matlab to Excel to
          Word templates.
        </p>
      </>
    ),
    technologies: ["VBA", "Matlab"],
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
