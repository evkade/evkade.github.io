import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : "not-scrolled"}`}>
      <nav className="navbar">
        <div className="brand">Eva Despinoy</div>
        <div className="nav-links">
          {["about", "skills", "experience", "projects", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="nav-button"
              >
                {item}
              </button>
            )
          )}
        </div>
        <button
          onClick={() => scrollToSection("contact")}
          className="cta-button"
        >
          Get In Touch
        </button>
      </nav>
    </header>
  );
};

export default Header;
