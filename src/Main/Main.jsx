import React, { useEffect, useState } from "react";
import "../App.css";
import Home from "../Components/Home";
import Profile from "../Components/Profile";
import Classes from "../Components/Classes";
import AddClass from "../Components/AddClass";
import AddIcon from "@mui/icons-material/Add";
const Main = () => {
  const [home, setHome] = useState(true);
  const [homeClass, setHomeClass] = useState();
  const [profile, setProfile] = useState(false);
  const [classes, setClasses] = useState(false);
  const [addClass, setAddClass] = useState(false);
  const handleNavigation = (value) => {
    if (value === "home") {
      setHome(true);
      setProfile(false);
      setClasses(false);
      setAddClass(false);
    } else if (value === "profile") {
      setHome(false);
      setProfile(true);
      setClasses(false);
      setAddClass(false);
    } else if (value === "classes") {
      setHome(false);
      setProfile(false);
      setClasses(true);
      setAddClass(false);
    } else {
      setHome(false);
      setProfile(false);
      setClasses(false);
      setAddClass(true);
    }
  };
  useEffect(() => {
    if (!classes) setHomeClass();
  }, [classes]);
  return (
    <main className="main-section">
      <section className="main-navigation">
        <button
          className={`main-navigation-button ${home ? " button-color" : ""}`}
          onClick={() => handleNavigation("home")}
        >
          Home
        </button>
        <button
          className={`main-navigation-button ${classes ? " button-color" : ""}`}
          onClick={() => handleNavigation("classes")}
        >
          Your Classes
        </button>
        <button
          className={`main-navigation-button ${
            addClass ? " button-color" : ""
          }`}
          onClick={() => handleNavigation("addClass")}
        >
          <AddIcon /> Add class
        </button>
        <button
          className={`main-navigation-button ${profile ? " button-color" : ""}`}
          onClick={() => handleNavigation("profile")}
        >
          Profile
        </button>
      </section>
      <section>
        {home && (
          <Home
            handleNavigation={handleNavigation}
            setHomeClass={setHomeClass}
          />
        )}
        {profile && <Profile />}
        {addClass && <AddClass />}
        {classes && (
          <Classes homeClass={homeClass} setHomeClass={setHomeClass} />
        )}
      </section>
    </main>
  );
};

export default Main;
