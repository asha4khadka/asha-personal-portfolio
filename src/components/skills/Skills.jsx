import React from "react";
import styles from "./skill.module.css";

const Skills = () => {
  return (
    <div className="container">
      <div className={styles.skillContainer} id="skills">
        {/* Background Image with Dark Overlay */}
        <div className={styles.skillBg}>
          <div className={styles.overlay}></div>

          <div className={styles.label}>
            <div className="cube">
              <h1 className={styles.skillsHeadline}>MY POWERFUL SKILLS</h1>
              <svg width="100%" height="100" className="line1">
                <line
                  x1="35%"
                  y1="0"
                  x2="80%"
                  y2="0"
                  style={{
                    stroke: "rgba(219, 7, 7, 0.726)",
                    strokeWidth: 5,
                  }}
                ></line>
              </svg>
              <div className={styles.head1}>
                Discovering My Strengths: Always Learning, Always Growing
              </div>
            </div>
          </div>
        </div>

        {/* First Circle */}
        <div className={styles.circle} style={{ top: "62vh", left: "20%" }}>
          <p6 className={styles.skillsName}>
            HTML<sub>5</sub>
          </p6>
        </div>

        {/* Second Circle */}
        <div className={styles.circle} style={{ top: "35vh", left: "42.5%" }}>
          <p6 className={styles.skillsName}>
            CSS<sub>3</sub>
          </p6>
        </div>

        {/* Third Circle */}
        <div className={styles.circle} style={{ top: "62vh", left: "65%" }}>
          <p6 className={styles.skillsName}>JavaScript</p6>
        </div>
      </div>
    </div>
  );
};

export default Skills;
