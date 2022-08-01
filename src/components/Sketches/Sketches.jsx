import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Firebase from "../../Firebase.js";
import "./sketches.css";
const Sketches = () => {
  const location = useLocation();
  const [sketches, setSketches] = useState([]);
  useEffect(() => {
    const firebaseVideos = collection(
      Firebase,
      location.state.className,
      location.state.chapterName,
      "Sketches"
    );
    getDocs(firebaseVideos)
      .then((res) => {
        const data = res.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
        setSketches(Object.entries(data[0].data));
      })
      .catch(() => {});
  }, [location.state.chapterName,location.state.className]);
  return (
    <>
      <NavLink to={-1} className="navlink">
        <ArrowBackIcon fontSize="large" />
      </NavLink>
      <h1 className="sketches-headline">
        {location.state.chapterName + " Sketches"}
      </h1>
      <div className="class-sketches">
        {sketches.length > 0 ? (
          sketches.map((sketchesData, index) => (
            <div key={Math.random() + index}>
              <h2>{sketchesData[1][1]}</h2>
              <img src={sketchesData[1][0]} className='class-sketch' alt={sketchesData[1][1]}/>
            </div>
          ))
        ) : (
          <h3 className="no-data">No sketches</h3>
        )}
      </div>
    </>
  );
};

export default Sketches;
