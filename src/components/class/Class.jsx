import React, { useState, useEffect } from "react";
import "./class.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Firebase from "../../Firebase.js";
const Class = () => {
  const location = useLocation();
  const [videos, setVideos] = useState([]);
  const [maps, setMaps] = useState([]);
  const [mods, setMods] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [labs, setLabs] = useState([]);
  const [sketches, setSketches] = useState([]);
  useEffect(() => {
    const firebaseVids = collection(
      Firebase,
      location.state.className,
      location.state.chapterName,
      "Videos"
    );
    getDocs(firebaseVids)
      .then((res) => {
        const data = res.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
        setVideos(Object.entries(data[0].data));
      })
      .catch(() => {
        setVideos([]);
      });
    const firebaseLabs = collection(
      Firebase,
      location.state.className,
      location.state.chapterName,
      "Laboratories"
    );
    getDocs(firebaseLabs)
      .then((res) => {
        const data = res.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
        setLabs(Object.entries(data[0].data));
      })
      .catch(() => {
        setLabs([]);
      });

    const firebaseQuiz = collection(
      Firebase,
      location.state.className,
      location.state.chapterName,
      "Pop Quizzes"
    );
    getDocs(firebaseQuiz)
      .then((res) => {
        const data = res.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
        setQuizzes(Object.entries(data[0].data));
      })
      .catch(() => {
        setQuizzes([]);
      });
    const firebaseMods = collection(
      Firebase,
      location.state.className,
      location.state.chapterName,
      "3D Models"
    );
    getDocs(firebaseMods)
      .then((res) => {
        const data = res.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
        setMods(Object.entries(data[0].data));
      })
      .catch(() => {
        setMods([]);
      });
    const firebaseSketch = collection(
      Firebase,
      location.state.className,
      location.state.chapterName,
      "Sketches"
    );
    getDocs(firebaseSketch)
      .then((res) => {
        const data = res.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
        setSketches(Object.entries(data[0].data));
      })
      .catch(() => {
        setSketches([]);
      });
    const firebaseMap = collection(
      Firebase,
      location.state.className,
      location.state.chapterName,
      "MindMaps"
    );
    getDocs(firebaseMap)
      .then((res) => {
        const data = res.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
        setMaps(Object.entries(data[0].data));
      })
      .catch(() => {
        setMaps([]);
      });
  }, [location.state.chapterName, location.state.className]);
  return (
    <div>
      <NavLink to={-1} className="navlink-back">
        <ArrowBackIcon fontSize="large" />
      </NavLink>
      <h1 className="class-name">{location.state.chapterName}</h1>
      <div className="class-content">
        {videos.length > 0 && (
          <div>
            <NavLink
              to={`/classes/${location.state.chapterName}/Videos`}
              className="navlink"
              state={location.state}
            >
              <img src="../../../Images/VideosNew.jpg" alt="Videos" />
              <h2>Videos</h2>
            </NavLink>
          </div>
        )}
        {labs.length > 0 && (
          <div>
            <NavLink
              to={`/classes/${location.state.chapterName}/Laboratories`}
              className="navlink"
              state={location.state}
            >
              <img src="../../../Images/LabsNew.jpg" alt="Laboratories" />
              <h2>Laboratories</h2>
            </NavLink>
          </div>
        )}
        {quizzes.length > 0 && (
          <div>
            <NavLink
              to={`/classes/${location.state.chapterName}/Pop Quizzes`}
              className="navlink"
              state={location.state}
            >
              <img src="../../../Images/PopQuiz.jpeg" alt="PopQuizzes" />
              <h2>Pop Quizzes</h2>
            </NavLink>
          </div>
        )}
        {mods.length > 0 && (
          <div>
            <NavLink
              to={`/classes/${location.state.chapterName}/3D Models`}
              className="navlink"
              state={location.state}
            >
              <img src="../../../Images/3DModels.jpg" alt="3D Models" />
              <h2>3D Models</h2>
            </NavLink>
          </div>
        )}
        {sketches.length > 0 && (
          <div>
            <NavLink
              to={`/classes/${location.state.chapterName}/Sketches`}
              className="navlink"
              state={location.state}
            >
              <img src="../../../Images/Sketches.jpg" alt="Sketches" />
              <h2>Sketches</h2>
            </NavLink>
          </div>
        )}
        {maps.length > 0 && (
          <div>
            <NavLink
              to={`/classes/${location.state.chapterName}/Mind Maps`}
              className="navlink"
              state={location.state}
            >
              <img src="../../../Images/MindMapsNew.jpg" alt="Mind Maps" />
              <h2>Mind Maps</h2>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Class;
