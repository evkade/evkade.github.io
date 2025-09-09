import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

import "./Me.css";
import Button from "../../components/button/Button";
import eva from "../../static_resources/eva.png";

const Me = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="me" className="me-section">
      <div className="me-container">
        <div className="me-grid">
          <div className="me-text animate-fade-in-up">
            <div className="me-headings">
              <h1 className="me-title">
                <span className="me-title-line">Hi, I'm</span>
                <span className="me-title-name">Eva Despinoy</span>
              </h1>
              <h2 className="me-subtitle">Fullstack Software Engineer</h2>
            </div>

            <p className="me-description">
              With experience across the stack, I’m passionate about designing
              reliable, scalable systems while crafting exceptional user
              experiences.
            </p>

            <div className="me-socials">
              <Button
                icon={<Github />}
                label=""
                size="icon"
                link="https://github.com/evkade"
                variant="icon"
              />
              <Button
                icon={<Linkedin />}
                label=""
                size="icon"
                link="https://www.linkedin.com/in/despinoy/"
                variant="icon"
              />
              <Button
                icon={<Mail />}
                label=""
                size="icon"
                link="mailto:eva.despinoy@gmail.com"
                variant="icon"
              />
            </div>
          </div>

          <div className="me-image-container animate-fade-in-up delay-200">
            <div className="me-image-wrapper">
              <img
                src={eva}
                alt="Alex Johnson - Software Engineer"
                className="me-image"
              />
              <div className="me-image-overlay"></div>
            </div>
          </div>
        </div>

        <div className="me-scroll-indicator">
          <Button
            variant="icon"
            onClick={() => scrollToSection("about")}
            label=""
            icon={<ArrowDown />}
          />
        </div>
      </div>
    </section>
  );
};

export default Me;
