import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Firebase from "../../Firebase.js";
import "./mindmaps.css";
const MindMaps = ({ setFullscreenElement }) => {
  const location = useLocation();
  const [mindmaps, setMindMaps] = useState([]);

  useEffect(() => {
    const firebaseVideos = collection(
      Firebase,
      location.state.className,
      location.state.chapterName,
      "MindMaps"
    );
    getDocs(firebaseVideos)
      .then((res) => {
        const data = res.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
        setMindMaps(Object.entries(data[0].data));
      })
      .catch(() => {});
  }, [location.state.chapterName, location.state.className]);
  return (
    <>
      <NavLink to={-1} className="navlink-back">
        <ArrowBackIcon fontSize="large" />
      </NavLink>
      <h1 className="mindmaps-headline">
        {location.state.chapterName + " mindmaps"}
      </h1>
      <div className="class-mindmaps">
        {mindmaps.length > 0
          ? mindmaps.map((mindmapsData, index) => (
              <div key={Math.random() + index}>
                <h2>{mindmapsData[1][1]}</h2>
                <img
                  src={mindmapsData[1][0]}
                  className="class-mindmap"
                  alt={mindmapsData[1][1]}
                />
                <button
                  onClick={() =>
                    setFullscreenElement({
                      src: mindmapsData[1][0],
                      alt: mindmapsData[1][1],
                      from:'mindmaps'
                    })
                  }
                  className="fullscreen-button"
                >
                  Fullscreen
                </button>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default MindMaps;
