import React, { useState } from "react";
import "./LMIframe.css";
const LMIframe = ({ src, title, classname, iframeTitle }) => {
  const [showLabOrModel, setShowLabOrModel] = useState(false);
  return (
    <>
      {showLabOrModel ? (
        <>
          <h2>{title}</h2>
          <iframe
            src={src}
            className={classname}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={iframeTitle}
          />
          <button className="LM-close-button" onClick={()=>setShowLabOrModel(false)}>Close</button>
        </>
      ) : (
        <div className="LM-div">
          <div >
            <img
              src="../../../Images/play-button-svgrepo-com (1).svg"
              alt="LabModel"
              onClick={() => setShowLabOrModel(true)}
            />
            <h2>{title}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default LMIframe;
