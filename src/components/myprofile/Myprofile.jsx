import React from "react";
import "./myprofile.css";

const Myprofile = () => {
  return (
    <div className="abt-container" id="myprofile">
      <div className="photo"></div>
      <div className="name">
        <h2>Asha Khadka</h2>
      </div>

      <svg width="100%" height="100" className="ad-line">
        <line
          x1="45%"
          y1="0"
          x2="53%"
          y2="0"
          style={{
            stroke: "rgba(219, 7, 7, 0.726)",
            strokeWidth: 5,
          }}
        ></line>
      </svg>

      <div className="desc">
        <p>Front End Developer</p>
      </div>

      <button className="about"> About me</button>
      <div className="content-container" id="myprofile">
        <div className="add-box">
          <div className="about-me-content">
            <div className="info">
              <p>
                Hi, I am Asha Khadka currently pursuing a bachelor's degree in
                Computer Science and Technology at Padma Kanya Campus. Now, I am
                studying in the 5th semester and know the basics of Reactjs. I
                am actively searching for an Internship Opportunity in Reactjs.
                <br />
                During my college time, I have learned about C, C++, Graphic
                Design, Python, MySQL, DSA. I am excited to explore new
                opportunities along my way now.
              </p>
            </div>
          </div>
        </div>
        <div className="details">
          <h2>Personal Info</h2>
          <svg width="100%" height="100" className="line">
            <line
              x1="5%"
              y1="0"
              x2="30%"
              y2="0"
              style={{
                stroke: "rgba(219, 7, 7, 0.726)",
                strokeWidth: 5,
              }}
            ></line>
          </svg>
          <div className="bio-data">
            <p> My Name: Asha Khadka</p>
            <p> Nationality: Nepal </p>
            <p> Date Of Birth: 2003-08-20 </p>
            <p> E-mail: khadkaasha98@gmail.com </p>
            <p> My Phone: +977 9861531604</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
