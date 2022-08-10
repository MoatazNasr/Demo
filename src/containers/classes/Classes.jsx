import React, { useState, useEffect } from "react";
import "./classes.css";
import { NavLink } from "react-router-dom";
const Classes = () => {
  const [myClasses, setMyClasses] = useState([]);
  useEffect(() => {
    const localstorageClasses = JSON.parse(
      window.localStorage.getItem("classes")
    );
    setMyClasses(localstorageClasses);
  }, []);
  return (
    <div className="classes">
      {(myClasses.length > 0 || myClasses) &&
        myClasses.map((classX, index) => (
          <div key={Math.random + index} className="class">
          <h2>{classX.className}</h2>
            <NavLink
              to={`/classes/${classX.chapterName}`}
              state={classX}
              className="navlink"
            >
              <img
                src="../../../Images/08-512.webp"
                alt="class-name"
              />
              <h3>{classX.chapterName}</h3>
            </NavLink>
          </div>
        ))}
    </div>
  );
};

export default Classes;
