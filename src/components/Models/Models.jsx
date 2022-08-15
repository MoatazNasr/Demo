import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Firebase from "../../Firebase.js";
import LMIframe from "../LabsModels-Iframe/LMIframe.jsx";
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
            <LMIframe
                  src={modelsData[1][0]}
                  classname="class-model"
                  title={modelsData[1][1]}
                  iframeTitle="model"
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