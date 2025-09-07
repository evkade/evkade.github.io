import Button from "../components/button/Button";
import "./Me.css";
import { Mail, Github, Linkedin } from "lucide-react";

const Me = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="me">
      <div className="me-container">
        <div>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            alt="Eva Despinoy"
            className="me-profile"
          />
        </div>
        <div
          style={{
            animationDelay: "0.2s",
            animationName: "fade-in",
            animationFillMode: "forwards",
          }}
        >
          <h1 className="me-title">
            <span className="intro">Hi, I'm</span>
            <span className="name">Eva Despinoy</span>
          </h1>
          <p className="me-subtitle">
            Working accross the stack, I am both passionate about building
            reliable and scalable systems, and creating exceptional user
            experiences.
          </p>
        </div>
        <div className="me-buttons">
          <Button
            label="View my work"
            onClick={() => scrollToSection("projects")}
          />
          <Button
            label="Let's connect"
            onClick={() => scrollToSection("contact")}
          />
        </div>
        <div className="me-socials">
          <Button
            icon={<Github />}
            label=""
            size="icon"
            link="https://leetcode.com/u/evkade/"
            variant="social"
          />
          <Button
            icon={<Linkedin />}
            label=""
            size="icon"
            link="https://www.linkedin.com/in/despinoy/"
            variant="social"
          />
          <Button
            icon={<Mail />}
            label=""
            size="icon"
            link="mailto:eva.despinoy@gmail.com"
            variant="social"
          />
        </div>
      </div>
    </section>
  );
};

export default Me;
