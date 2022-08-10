import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Firebase from "../../Firebase.js";
import "./videos.css";
const Videos = () => {
  const location = useLocation();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const firebaseVideos = collection(
      Firebase,
      location.state.className,
      location.state.chapterName,
      "Videos"
    );
    getDocs(firebaseVideos)
      .then((res) => {
        const data = res.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
        setVideos(Object.entries(data[0].data));
      })
      .catch(() => {
      });
  }, [location.state.chapterName,location.state.className]);
  return (
    <>
      <NavLink to={-1} className="navlink-back">
        <ArrowBackIcon fontSize="large" />
      </NavLink>
      <h1 className="videos-headline">{location.state.chapterName + ' Videos'}</h1>
      <div className="class-videos">
        {videos.length > 0 ?
          videos.map((videoData,index) => (
            <div key={Math.random() + index}>
              <h2>{videoData[1][1]}</h2>
              <video
                src={videoData[1][0]}
                playsInline
                controls
                className="class-video"
              />
            </div>
          )):''}
      </div>
    </>
  );
};

export default Videos;
