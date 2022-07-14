import React from "react";

const classForce = {
  name: "Force",
  content: [
    "Videos",
    "Laboratories",
    "Pop Quiz",
    "3D Models",
    "Sketches",
    "Mind Map",
  ],
};
const classPhysics = {
  name: "Physics",
  content: [
    "Videos",
    "Laboratories",
    "Pop Quiz",
    "3D Models",
    "Sketches",
    "Mind Map",
  ],
};
const classChemistry = {
  name: "Chemistry",
  content: [
    "Videos",
    "Laboratories",
    "Pop Quiz",
    "3D Models",
    "Sketches",
    "Mind Map",
  ],
};
const Classes = ({ homeClass, setHomeClass }) => {
  return (
    <div className="classes">
      {homeClass ? (
        <>
          <h1 className="class-name">{homeClass.name}</h1>
          <div className="class-contents">
            {homeClass.content.map((value) => (
              <>
                <div key={Math.random()}>
                  <button onClick={() => setHomeClass(classForce)}>
                    <img src="../../education-icon-pencil-6096866-1024x1024.jpg" alt="class" />
                  </button>
                  <p className="home-classes-name"> {value}</p>
                </div>
              </>
            ))}
          </div>
        </>
      ) : (
        <div className="classesPage-classes">
          <div>
            <button onClick={() => setHomeClass(classForce)}>
              <img src="../../physics-icon-13.jpg" alt="class" />
            </button>
            <p className="home-classes-name">Force</p>
          </div>
          <div>
            <button onClick={() => setHomeClass(classPhysics)}>
              <img src="../../physics-icon-13.jpg" alt="class" />
            </button>
            <p className="home-classes-name">Physics</p>
          </div>
          <div>
            <button onClick={() => setHomeClass(classChemistry)}>
              <img src="../../physics-icon-13.jpg" alt="class" />
            </button>
            <p className="home-classes-name">Chemistry</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Classes;
