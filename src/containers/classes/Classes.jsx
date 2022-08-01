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
            <NavLink to={`/classes/${classX.chapterName}`} state={classX} className="navlink">
              <img
                src="../../../Images/books-stack-of-three.svg"
                alt="class-name"
              />
              <h2>{classX.className}</h2>
              <h3>{classX.chapterName}</h3>
            </NavLink>
          </div>
        ))}
    </div>
  );
};

export default Classes;
