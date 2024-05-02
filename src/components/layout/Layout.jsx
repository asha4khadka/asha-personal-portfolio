// ResponsiveLayout.js
import React from "react";
import "./layout.css";

const Layout = ({ children }) => {
  return <div className="responsive-layout">{children}</div>;
};

export default Layout;
