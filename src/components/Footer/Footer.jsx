import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Useful Links</h3>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: contact@hotel.com</p>
          <p>Phone: +44 123 456 789</p>
          <p>Address: 123 Example Street, London</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
