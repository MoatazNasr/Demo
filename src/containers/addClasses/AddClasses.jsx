import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./addclasses.css";
import { collection, getDocs } from "firebase/firestore";
import Firebase from "../../Firebase";
const AddClasses = () => {
  const [classX, setClassX] = useState();
  const [chapter, setChapter] = useState();
  const [firebaseChapters, setFirebaseChapters] = useState([]);
  const [filteredChapters, setFilteredChapters] = useState([]);
  const [onClassClick, setOnClassClick] = useState(false);
  const [onChapterClick, setOnChapterClick] = useState(false);
  useEffect(() => {
    if (classX) {
      const chapters = collection(Firebase, classX);
      getDocs(chapters).then((res) => {
        const returnedChapters = res.docs.map((doc) => doc.id);
        setFirebaseChapters(returnedChapters);
        const userClasses = JSON.parse(window.localStorage.getItem("classes"));
        let notSelectedChapters = returnedChapters.filter((chapter) => {
          let chapterExists = true;
          userClasses.forEach((classObject) => {
            if (chapter === classObject.chapterName) {
              chapterExists = false;
            }
          });

          return chapterExists;
        });
        setFilteredChapters(notSelectedChapters);
      });
    }
  }, [classX]);
  const chooseClass = (className) => {
    setClassX(className);
    setOnClassClick(false);
  };
  const chooseChapter = (chapterName) => {
    setChapter(chapterName);
    setOnChapterClick(false);
  };
  const addClass = () => {
    const newClassesObject = [{ className: classX, chapterName: chapter }];
    let classesObject = JSON.parse(window.localStorage.getItem("classes"));
    classesObject = [...classesObject, ...newClassesObject];
    window.localStorage.setItem("classes", JSON.stringify(classesObject));
    let notSelectedChapters = firebaseChapters.filter((chapter) => {
      let chapterExists = true;
      classesObject.forEach((classObject) => {
        if (chapter === classObject.chapterName) {
          chapterExists = false;
        }
      });

      return chapterExists;
    });
    setFilteredChapters(notSelectedChapters);
    setChapter();
  };
  return (
    <div className="add-classes">
      <h2>Choose a Class</h2>
      <div className="select">
        <p>{classX}</p>
        <div
          className={`select-options ${
            onClassClick ? "select-options-show" : ""
          }`}
        >
          {" "}
          <p onClick={() => chooseClass("Class 1")}>Class 1</p>
          <p onClick={() => chooseClass("Class 2")}>Class 2</p>
          <p onClick={() => chooseClass("Class 3")}>Class 3</p>
          <p onClick={() => chooseClass("Class 4")}>Class 4</p>
          <p onClick={() => chooseClass("Class 5")}>Class 5</p>
          <p onClick={() => chooseClass("Class 6")}>Class 6</p>
          <p onClick={() => chooseClass("Class 7")}>Class 7</p>
          <p onClick={() => chooseClass("Class 8")}>Class 8</p>
          <p onClick={() => chooseClass("Class 9")}>Class 9</p>
          <p onClick={() => chooseClass("Class 10")}>Class 10</p>
        </div>
        <button onClick={() => setOnClassClick(!onClassClick)}>
          {onClassClick ? (
            <KeyboardArrowUpIcon fontSize="large" />
          ) : (
            <KeyboardArrowDownIcon fontSize="large" />
          )}
        </button>
      </div>
      {classX && (
        <>
          <h2>Choose a Chapter</h2>

          <div className="select">
            <p>{chapter}</p>
            <div
              className={`select-options ${
                onChapterClick ? "select-options-show" : ""
              }`}
            >
              {filteredChapters.length > 0 &&
                filteredChapters.map((chapterName, index) => (
                  <p
                    onClick={() => chooseChapter(chapterName)}
                    key={Math.random + index}
                  >
                    {chapterName}
                  </p>
                ))}
            </div>
            <button onClick={() => setOnChapterClick(!onChapterClick)}>
              {onChapterClick ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
            </button>
          </div>
        </>
      )}
      {!onChapterClick && (
        <button className="add-class" onClick={addClass} disabled={!chapter}>
          Add Class
        </button>
      )}
    </div>
  );
};

export default AddClasses;
