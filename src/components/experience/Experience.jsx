import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"; // Import from free-solid-svg-icons
import "./experience.css";

const Experience = () => {
  return (
    
      <div className="label" id="experience">
        <div className="cube">
          <p3>MY EXPERIENCES</p3>
          <svg width="100%" height="100" className="line1">
            <line
              x1="40%"
              y1="0"
              x2="60%"
              y2="0"
              style={{
                stroke: "rgba(219, 7, 7, 0.726)",
                strokeWidth: 5,
              }}
            ></line>
          </svg>
          <div className="header">
            I beleive, exploring different fields at the beginning of your
            career can enhance and broaden your thinking capacity.
          </div>
          {/* Container for left content */}
          <div className="left-side">
            <button className="date1"> May 2023 - Apr 2024</button>
            <div className="icon-with-text1">
              <FontAwesomeIcon
                icon={faLayerGroup}
                size="2x"
                className="exp-icon1"
                style={{ color: "#db0707" }}
              />
              <p className="icon-text1">
                Content Writer
                <br />
              </p>
            </div>

            <button className="date2"> August 2023</button>
            <div className="icon-with-text2">
              <FontAwesomeIcon
                icon={faLayerGroup}
                size="2x"
                className="exp-icon2"
                style={{ color: "#db0707" }}
              />
              <p className="icon-text2">
                Social Media Marketing Intern
                <br />
              </p>
            </div>

            <button className="date3"> January 2024</button>
            <div className="icon-with-text3">
              <FontAwesomeIcon
                icon={faLayerGroup}
                size="2x"
                className="exp-icon3"
                style={{ color: "#db0707" }}
              />
              <p className="icon-text3">
                SEO Intern
                <br />
              </p>
            </div>
          </div>
          {/* Image on the right half */}

          <div className="exp-image">
            <img src="./work-exp.webp" alt="Work Experience"></img>
          </div>
        </div>
      </div>
    
  );
};

export default Experience;
