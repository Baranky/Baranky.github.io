import "./DownloadButton.css";
import React from "react";
import resume from "../../assets/resume.pdf";

const DownloadButton = (props) => {
  // Cache busting için timestamp ekle
  const resumeUrl = `${resume}?v=${Date.now()}`;
  
  return (
    <a href={resumeUrl} download="Baran_kaya.pdf">
    <div onClick={props.onClick} className="download-btn">
      <span className="download-txt">Download CV</span>
    </div>
  </a>
  );
};

export default DownloadButton;
