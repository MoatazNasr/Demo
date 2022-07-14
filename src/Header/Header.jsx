import React from "react";
import "../App.css";
const Header = () => {
  return (
    <header className="header">
      <img
        src="https://super-faloodeh-1d8e54.netlify.app/static/media/Vizlogo.87e30840.gif"
        alt="logo"
        className="logo"
      />
      <button className="header-button">Sign Out</button>
    </header>
  );
};

export default Header;
