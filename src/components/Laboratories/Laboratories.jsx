import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Firebase from "../../Firebase.js";
import LMIframe from "../LabsModels-Iframe/LMIframe.jsx";
import "./laboratories.css";
const Laboratories = () => {
  const location = useLocation();
  const [labs, setLabs] = useState([]);
  useEffect(() => {
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
      .catch(() => {});
  }, [location.state.chapterName, location.state.className]);
  return (
    <>
      <NavLink to={-1} className="navlink-back">
        <ArrowBackIcon fontSize="large" />
      </NavLink>
      <h1 className="labs-headline">
        {location.state.chapterName + " Laboratories"}
      </h1>
      <div className="class-labs">
        {labs.length > 0
          ? labs.map((labsData, index) => (
              <div key={Math.random() + index}>
                <LMIframe
                  src={labsData[1][0]}
                  classname="class-lab"
                  title={labsData[1][1]}
                  iframeTitle="lab"
                />
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default Laboratories;
