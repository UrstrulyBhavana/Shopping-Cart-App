import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Shopmate</h2>
          <p>Your one-stop destination for quality shopping.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><a href="YOUR_GITHUB_REPO_LINK" target="_blank" rel="noopener noreferrer">GitHub Repo</a></li>
            <li><a href="YOUR_LIVE_DEMO_LINK" target="_blank" rel="noopener noreferrer">Live Demo</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:YOUR_EMAIL">YOUR_EMAIL</a></p>
          <p>GitHub: <a href="YOUR_GITHUB_PROFILE" target="_blank" rel="noopener noreferrer">@YourGitHub</a></p>
          <p>LinkedIn: <a href="YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer">Your LinkedIn</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shopmate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
