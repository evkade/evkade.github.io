import Button from "../components/button/Button";
import "./Me.css";

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
          <h1 className="me-title">Software Engineer</h1>
          <p className="me-subtitle">
            Passionate about building scalable web applications and creating
            exceptional user experiences with modern technologies.
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
          <Button label="Github" link="https://leetcode.com/u/evkade/" />
        </div>
      </div>
    </section>
  );
};

export default Me;
