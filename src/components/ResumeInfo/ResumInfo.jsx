import React from "react";
import "./ResumeInfo.css";

const ResumeInfo = () => {
  const attributes = [
    { name: "Email", value: "baranky2104@gmail.com" },
    { name: "Phone ", value: "+90 533 198 2104" },

    { name: "Address", value: "İstanbul / Turkey" },
    { name: "Date of Birth", value: "2002" },
    { name: "Languages", value: "Turkish(Native)\nEnglish(Intermediate)" },
    { name: "References", value: "Hakan Anlamaz\nJforce Team Leader\n \nİletişim bilgileri istek üzerine paylaşılacaktır." },
  ];

  return (
    <div className="resume-info__root" id="about">
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
