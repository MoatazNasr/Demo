import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useLocation } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Firebase from "../../Firebase.js";
import "./quizzes.css";
const Quizzes = ({setFullscreenElement}) => {
  const location = useLocation();
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    const firebaseQuizzes = collection(
      Firebase,
      location.state.className,
      location.state.chapterName,
      "Pop Quizzes"
    );
    getDocs(firebaseQuizzes)
      .then((res) => {
        const data = res.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
        console.log(data[0].data);
        setQuizzes(Object.entries(data[0].data));
      })
      .catch(() => {
        setQuizzes([]);
      });
  }, [location.state.chapterName, location.state.className]);
  return (
    <>
      <NavLink to={-1} className="navlink-back">
        <ArrowBackIcon fontSize="large" />
      </NavLink>
      <h1 className="labs-headline">
        {location.state.chapterName + "Pop Quiz"}
      </h1>
      <div className="class-labs ">
        {quizzes.length > 0
          ? quizzes.map((quizzData, index) => (
              <div key={Math.random() + index}>
                <h2>{quizzData[1][1]}</h2>
                <iframe
                  src={quizzData[1][0]}
                  className="class-lab"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="quiz"
                  frameBorder="0"
                />
                  <button
                  onClick={() =>   setFullscreenElement({
                      src: quizzData[1][0],
                      alt: '',
                      from:'quizzes'

                    })}
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

export default Quizzes;
