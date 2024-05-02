import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaMedium,
} from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  const email = "khadkaasha98@gmail.com";
  const linkedin = "https://www.linkedin.com/in/asha-khadka-807457257/";
  const phoneNumber = "+1234567890";
  const facebook = "https://www.facebook.com/asha.khadka.3538";
  const instagram = "https://www.instagram.com/a_ss_ha/";
  const github = "https://github.com/asha4khadka";
  const medium = "https://medium.com/@Ashakhadka4";

  return (
    <div className="container">
    <div
      className="contact-container"
      id="contact"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/contact.webp)` }}
    >
      <div className="contact-info">
        <h2>Contact Information</h2>
        <svg width="100%" height="100" className="line4">
          <line
            x1="20%"
            y1="0"
            x2="80%"
            y2="0"
            style={{
              stroke: "rgba(219, 7, 7, 0.726)",
              strokeWidth: 5,
            }}
          ></line>
        </svg>
        <div className="contact-row">
          <div className="contact-column">
            <FaEnvelope className="icon" />
            <span className="contact-text">
              <a href={`mailto:${email}`} className="contact-link">
                My Email
              </a>
            </span>
          </div>
          <div className="contact-column">
            <FaLinkedin className="icon" />
            <a href={linkedin} className="contact-link">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="contact-row2">
          <div className="contact-column">
            <FaPhone className="icon rotate-icon" />
            <span className="contact-text">
              <a href={`tel:${phoneNumber}`} className="contact-link">
                Phone_Number
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="social-footer">
        <div className="follow">
          <h2> FOLLOW ME HERE:</h2>
          <div className="social-link3">
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <div className="social-icon">
                <FaFacebook />
              </div>
            </a>
          </div>
          <div className="social-link3">
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <div className="social-icon">
                <FaInstagram />
              </div>
            </a>
          </div>
          <div className="social-link3">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <div className="social-icon">
                <FaGithub />
              </div>
            </a>
          </div>
          <div className="social-link3">
            <a href={medium} target="_blank" rel="noopener noreferrer">
              <div className="social-icon">
                <FaMedium />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
