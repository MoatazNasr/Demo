import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Firebase from "../../Firebase.js";
import './models.css';
const Models = () => {
  const location = useLocation();
  const [models, setModels] = useState([]);
  useEffect(() => {
    const firebaseModels = collection(
      Firebase,
      location.state.className,
      location.state.chapterName,
      "3D Models"
    );
    getDocs(firebaseModels)
      .then((res) => {
        const data = res.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
        setModels(Object.entries(data[0].data));
      })
      .catch(() => {});
  }, [location.state.chapterName,location.state.className]);
  return (
    <>
      <NavLink to={-1} className="navlink-back">
        <ArrowBackIcon fontSize="large" />
      </NavLink>
      <h1 className="models-headline">
        {location.state.chapterName + " Models"}
      </h1>
      <div className="class-models">
        {models.length > 0 ? (
          models.map((modelsData, index) => (
            <div key={Math.random() + index}>
              <h2>{modelsData[1][1]}</h2>
              <iframe
                src={modelsData[1][0]}
                className="class-model"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="model"
              />
            </div>
          ))
        ) : (
         ''
        )}
      </div>
    </>
  )
}

export default Models