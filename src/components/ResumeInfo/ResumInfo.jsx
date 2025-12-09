import React from "react";
import "./ResumeInfo.css";

const ResumeInfo = () => {
  const attributes = [
    { name: "Email", value: "baranky2104@gmail.com" },
    { name: "Address", value: "Turkey,İstanbul" },
    { name: "Date of Birth", value: "2002" },
    { name: "Languages", value: "Turkish\nEnglish" },
  ];

  return (
    <div className="resume-info__root">
      <span className="resume-info__title">About</span>
      <div>
        {attributes.map((attribute, index) => {
          return (
            <div key={index} className="resume-info__attribute">
              <span className="resume-info__attribute__name">
                {attribute.name}
              </span>
              <br />
              <span className="resume-info__attribute__value">
                {attribute.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResumeInfo;
