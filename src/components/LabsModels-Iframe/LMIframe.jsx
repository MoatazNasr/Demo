import React, { useState } from "react";
import "./LMIframe.css";
const LMIframe = ({ src, title, classname, iframeTitle }) => {
  const [showLabOrModel, setShowLabOrModel] = useState(false);
  return (
    <>
      <h2>{title}</h2>
      {showLabOrModel ? (
        <iframe
          src={src}
          className={classname}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={iframeTitle}
        />
      ) : (
        <img
          src="../../../Images/play-button-svgrepo-com (1).svg"
          alt="LabModel"
          onClick={() => setShowLabOrModel(true)}
          className='LM-image'
        />
      )}
    </>
  );
};

export default LMIframe;
