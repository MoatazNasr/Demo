import React from "react";
import "./gifs.css";
import gifsArray from './gifData.js';
const Gifs = ({ gif, setGif }) => {
  
  return (
    <div className="gifs">
      {gifsArray.map((element, index) => (
        <div
          key={index}
          className={`gif-element  ${
            gif.url === element.url ? "gif-element-active" : ""
          }`}
          onClick={() => setGif(element)}
        >
          <img src={element.image} alt={element.heading} />
          <h4>{element.heading}</h4>
        </div>
      ))}
    </div>
  );
};

export default Gifs;
