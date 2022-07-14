import React from "react";
import "../App.css";
const classForce = {
  name: "Force",
  content: [
    "Videos",
    "Laboratories",
    "Pop Quiz",
    "3D Models",
    "Sketches",
    "Mind Map",
  ],
};
const Home = ({ handleNavigation, setHomeClass }) => {
  const handleClassClick = (value, classe) => {
    handleNavigation(value);
    setHomeClass(classe);
  };
  return (
    <div className="home">
      <h1>Hi Aparna, What would you like to teach today?</h1>
      <div className="home-classes">
        <div>
          <p>Continue where you left off</p>
          <button onClick={() => handleClassClick("classes", classForce)}>
            <img src="../../physics-icon-13.jpg" alt="class" />
          </button>
          <p className="home-classes-name">Force</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
