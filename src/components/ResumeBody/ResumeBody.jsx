import React from "react";
import AchievementComponent from "../AchievementComponent/AchievementComponent";
import ArticleComponent from "../ArticleComponent/ArticleComponent";
import EducationComponent from "../EducationComponent/EducationComponent";
import ExperienceComponent from "../ExperienceComponent/ExperienceComponent";
import ProjectComponent from "../ProjectComponent/ProjectComponent";
import ResumeInfo from "../ResumeInfo/ResumInfo";
import TechStackComponent from "../TechStackComponent/TechStackComponent";
import "./ResumeBody.css";

const ResumeBody = () => {
  return (
    <div className="resume-body__root">
      <div className="resume-body__about">
        <ResumeInfo />
      </div>
      <div className="resume-body__right">
        <TechStackComponent />
        <ExperienceComponent />
        <EducationComponent/>
        {/* <AchievementComponent /> */}
        <ProjectComponent />
        <ArticleComponent />
      </div>
    </div>
  );
};

export default ResumeBody;
