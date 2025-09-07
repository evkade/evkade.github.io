import { Code, Palette, Zap } from "lucide-react";
import "./About.css";
import Highlight, { HighlightItem } from "./Highlight";
import SkillGroup from "./SkillGroup";

function About() {
  const highlights: HighlightItem[] = [
    {
      icon: <Code className="icon-glow" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: <Palette className="icon-glow" />,
      title: "User Focus",
      description: "Focusing on user needs and feedback.",
    },
    {
      icon: <Zap className="icon-glow" />,
      title: "Performance",
      description:
        "Optimizing applications and systems for speed and efficiency.",
    },
  ];
  const skills = {
    "Programming Languages": [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "Rust",
      "PHP",
      "Bash",
      "HTML",
      "CSS",
    ],
    "Frameworks & Libraries": [
      "React",
      "Node.js",
      "Express",
      "GraphQL",
      "Jest",
    ],
    Databases: ["MySQL", "PostgreSQL", "MongoDB"],
    "Tools & Software": ["IntelliJ", "Visual Studio Code", "GitHub", "Jira"],
    Languages: ["Swedish", "French", "English"],
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About me</h2>
          <p className="about-subtitle">
            A passionate developer with 3+ years of experience building reliable
            products and systems.
          </p>
        </div>

        <div className="about-highlights">
          {highlights.map((highlight, index) => (
            <Highlight highlight={highlight} index={index} />
          ))}
        </div>

        <div className="about-skills">
          <h3 className="skills-title">Technical Skills</h3>
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillGroup key={category} title={category} skills={skillList} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
