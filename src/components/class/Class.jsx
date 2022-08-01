import React from "react";
import "./class.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useLocation } from "react-router-dom";
import classesData from "./classData";
const Class = () => {
  const location = useLocation();
  return (
    <div>
      <NavLink to={-1} className="navlink">
        <ArrowBackIcon fontSize="large" />
      </NavLink>
      <h1 className="class-name">{location.state.chapterName}</h1>
      <div className="class-content">
        {classesData.map((classData, index) => (
          <div key={Math.random + index}>
            <NavLink
              to={`/classes/${location.state.chapterName}/${classData.contentName}`}
              className="navlink"
              state={location.state}
            >
              <img src={classData.contentImage} alt={classData.contentName} />
              <h2>{classData.contentName}</h2>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Class;
