import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Home from "./containers/home/Home";
import Classes from "./containers/classes/Classes";
import AddClasses from "./containers/addClasses/AddClasses";
import Profile from "./containers/profile/Profile";
import Class from "./components/class/Class";
import Videos from "./components/Videos/Videos";
import Sketches from "./components/Sketches/Sketches";
import MindMaps from "./components/MindMaps/MindMaps";
import Quizzes from "./components/Quizzes/Quizzes";
import Laboratories from "./components/Laboratories/Laboratories";
import Models from "./components/Models/Models";
function App() {
  const [gif, setGif] = useState();
  const [tabsBTNClicked, setTabsBTNClicked] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [fullscreenElement, setFullscreenElement] = useState();
  useEffect(() => {
    if (!window.localStorage.getItem("classes")) {
      window.localStorage.setItem("classes", JSON.stringify([]));
    }
  }, []);
  useEffect(() => {
    setGif({
      image: "../../../Images/6b6500c525aa1be40280feaedb894901.webp",
      url: "https://s3.amazonaws.com/calm-assets-videos/hls/aaf764eade43946661391ae8204118bc/aaf764eade43946661391ae8204118bc.mp4",
      heading: "Jasper Lake",
    });
  }, []);
  useEffect(() => {
    console.log(fullscreenElement);
  }, [fullscreenElement]);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return (
    <>
      <video
        src={gif?.url}
        loop={true}
        autoPlay={true}
        muted
        className="background-video"
      />
      <BrowserRouter>
        <main className="main">
          <button
            className="tabs-button"
            id="tabBTN"
            onClick={() => setTabsBTNClicked(!tabsBTNClicked)}
          >
            <DehazeIcon fontSize="large" />
          </button>
          <section
            className={`tabs ${
              width > 768
                ? "tabs-show-block"
                : width <= 768 && tabsBTNClicked
                ? "tabs-show-flex"
                : "tabs-hide"
            }`}
          >
            <div className="logo">
              <img
                src="https://super-faloodeh-1d8e54.netlify.app/static/media/Vizlogo.87e30840.gif"
                alt="logo"
              />
              <h1>vizuara</h1>
            </div>
            <ul>
              <li className="links">
                <NavLink to="/" className="home-link">
                  <HomeOutlinedIcon /> Home
                </NavLink>
              </li>
              <li className="links classes-link">
                <NavLink to="/classes">
                  <NoteOutlinedIcon /> Classes
                </NavLink>
              </li>
              <li className="links addclasses-link">
                <NavLink to="addclasses">
                  <NoteAddOutlinedIcon /> Add Classes
                </NavLink>
              </li>
              <li className="links profile-link">
                <NavLink to="profile">
                  <AccountCircleOutlinedIcon /> Profile
                </NavLink>
              </li>
            </ul>
          </section>
          <section className="content">
            {fullscreenElement ? (
              <div className="fullscreen-content">
                <button
                  className="exit-fullscreen-button"
                  onClick={() => setFullscreenElement()}
                >
                  Exit Fullscreen
                </button>
                {fullscreenElement.from === "quizzes" ? (
                  <iframe
                    src={fullscreenElement.src}
                    title="quiz"
                    className="fullscreen-element"
                  />
                ) : (
                  <img
                    src={fullscreenElement.src}
                    alt={fullscreenElement.alt}
                    className="fullscreen-element"
                  />
                )}
              </div>
            ) : (
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Home gif={gif} setGif={setGif} />}
                />
                <Route path="/Classes" element={<Classes />} />
                <Route path="/Classes/:chapterName" element={<Class />} />
                <Route
                  path="/Classes/:chapterName/videos"
                  element={<Videos />}
                />
                <Route
                  path="/Classes/:chapterName/Mind%20Maps"
                  element={
                    <MindMaps setFullscreenElement={setFullscreenElement} />
                  }
                />
                <Route
                  path="/Classes/:chapterName/Sketches"
                  element={
                    <Sketches setFullscreenElement={setFullscreenElement} />
                  }
                />
                <Route
                  path="/Classes/:chapterName/laboratories"
                  element={<Laboratories />}
                />
                <Route
                  path="/Classes/:chapterName/Pop%20Quizzes"
                  element={
                    <Quizzes setFullscreenElement={setFullscreenElement} />
                  }
                />
                <Route
                  path="/Classes/:chapterName/3D%20Models"
                  element={<Models />}
                />

                <Route path="/AddClasses" element={<AddClasses />} />
                <Route path="/Profile" element={<Profile />} />
              </Routes>
            )}
          </section>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
