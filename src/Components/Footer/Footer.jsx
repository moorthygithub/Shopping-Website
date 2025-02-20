import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/Banner-3.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>
          Mag <span style={{ color: "red" }}>S</span>
          <span style={{ color: "orange" }}>H</span>
          <span style={{ color: "indigo" }}>O</span>
          <span style={{ color: "violet" }}>P</span>
          <span style={{ color: "blue" }}>P</span>
          <span style={{ color: "yellow" }}>E</span>
          <span style={{ color: "green" }}>R</span>
          <span style={{ color: "red" }}>S</span>
        </p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a href="https://www.instagram.com/" rel="_blank">
            <img src={instagram_icon} alt="" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.pinterest.com/" rel="_blank">
            <img src={pintester_icon} alt="" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.whatsapp.com/" rel="_blank">
            <img src={whatsapp_icon} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
