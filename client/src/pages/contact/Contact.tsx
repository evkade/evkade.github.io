import "./Contact.css";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <div className="contact-grid">
          {/* Left side */}
          <div className="contact-info">
            <div>
              <h3 className="contact-subtitle">Let's work together</h3>
              <p className="contact-text">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                I'll do my best to get back to you!
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail className="contact-icon" />
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">alex.chen@example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone className="contact-icon" />
                </div>
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin className="contact-icon" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github className="contact-icon" />
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
