import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : "not-scrolled"}`}>
      <nav className="navbar">
        <button className="brand" onClick={() => scrollToSection("me")}>Eva Despinoy</button>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X className="hamburger-icon" /> : <Menu className="hamburger-icon" />}
        </button>
        <div className={`nav-links${menuOpen ? " nav-links-open" : ""}`}>
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
      </nav>
    </header>
  );
};

export default Header;
