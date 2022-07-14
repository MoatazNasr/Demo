import React, { useState } from "react";
import "../App.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const AddClass = () => {
  const [onSelect, setOnSelect] = useState(false);
  const [selectedOption,setSelectedOption] = useState();
  return (
    <div className="add-class">
    <h2>
      Choose Class
    </h2>
      <div className="select" onClick={() => setOnSelect(!onSelect)}>
      <p>{selectedOption}</p>
        <div className={`options ${onSelect ? "display" : "hide"}`}>
          <div className="select-option" onClick={()=>setSelectedOption('Force')}>Force</div>
          <div className="select-option" onClick={()=>setSelectedOption('Physics')}>Physics</div>
          <div className="select-option" onClick={()=>setSelectedOption('Chemistry')}>Chemistry</div>
          <div className="select-option" onClick={()=>setSelectedOption('Biology')}>Biology</div>
        </div>
        <button onClick={() => setOnSelect(!onSelect)}>
          {!onSelect ? (
            <KeyboardArrowDownIcon fontSize="large" />
          ) : (
            <KeyboardArrowUpIcon fontSize="large" />
          )}
        </button>
      </div>
    </div>
  );
};

export default AddClass;
