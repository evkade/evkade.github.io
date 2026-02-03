import "./Contact.css";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's connect</h2>
        <div className="contact-info">
          <p className="contact-text">
            Interested in working together or just want to connect? Drop me a
            message, I’d be happy to hear from you!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Mail className="contact-icon" />
              </div>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">eva.despinoy@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Phone className="contact-icon" />
              </div>
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-value">+46 7 09 65 05 10</p>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/despinoy/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin className="contact-icon" />
            </a>
            <a
              href="https://github.com/u/evkade/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github className="contact-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
