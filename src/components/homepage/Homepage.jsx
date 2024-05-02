import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink
import "./homepage.css";
import Myprofile from "../myprofile/Myprofile";
import Experience from "../experience/Experience";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`background ${scrolled ? "scrolled" : ""}`}>
        <div className={`nav-bar ${scrolled ? "active" : ""}`}>
          <Link smooth to="#home">
            Home
          </Link>{" "}
          <Link smooth to="#myprofile">
            About
          </Link>{" "}
          <Link smooth to="#experience">
            Experiences
          </Link>{" "}
          <Link smooth to="#skills">
            Skills
          </Link>{" "}
          <Link smooth to="#contact">
            Contact
          </Link>{" "}
        </div>
        <div className="content" id="home">
          <h2 className={`centered-text ${scrolled ? "scrolled-text" : ""}`}>
            I'm Asha Khadka
          </h2>
          <div
            className={`skilled ${scrolled ? "scrolled-text" : ""}`}
            id="skilled"
          >
            {" "}
            {/* Add an id */}
            <p className="p1">SEO Content Writing</p>
            <p className="p2">
              <FontAwesomeIcon
                icon={faDiamond}
                className="icon"
                style={{ color: "rgba(219, 7, 7, 0.726)", fontSize: "10px" }}
              />
              Web Dev
            </p>
            <p className="p3">
              {" "}
              <FontAwesomeIcon
                icon={faDiamond}
                className="icon"
                style={{ color: "rgba(219, 7, 7, 0.726)", fontSize: "10px" }}
              />
              Social Media Marketing
            </p>
          </div>
          <div>
            <div className="box">
              <button className="work">MY WORKS</button>
              <button className="hire">HIRE ME</button>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faAnglesDown}
            bounce
            style={{
              color: `${scrolled ? "#000000" : "#ffffff"}`,
              fontSize: "24px",
            }}
            className="botton"
          />
        </div>
      </div>
      <Myprofile id="myprofile" />
      <Experience id="experience" />
      {/* Corrected className and id */}
      <Skills id="skills" />
      <Contact id="contact" />
    </div>
  );
};

export default Homepage;
