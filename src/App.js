import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Homepage from "./components/homepage/Homepage";
import Myprofile from "./components/myprofile/Myprofile";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Layout from "./components/layout/Layout";
import "./App.css"; // Import your CSS file

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme === "light" ? "light-theme" : "dark-theme"}`}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/myprofile" element={<Myprofile />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
      <button className="toggle-button" onClick={toggleTheme}>
        {theme === "light" ? (
          <FontAwesomeIcon icon={faMoon} size="3x" />
        ) : (
          <FontAwesomeIcon icon={faSun} size="2x" />
        )}
      </button>
    </div>
  );
}

export default App;
