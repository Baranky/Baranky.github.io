import React from "react";
import AccountList from "../AccountList/AccountList";
import SeeMoreComponent from "../SeeMoreComponent/SeeMoreComponent";
import ScrollUpButton from "../ScrollUpButton/ScrollUpButton";
import WelcomeText from "../WelcomeText/WelcomeText";
import bgImage from "../../assets/images/software-engineering.jpg";

import "./LandingPageComponent.css";

const LandingPageComponent = () => {
  return (
    <div 
      className="landing-page-component-root" 
      id="landing-page"
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      <WelcomeText />
      <AccountList />
      <SeeMoreComponent />
      <ScrollUpButton />
    </div>
  );
};

export default LandingPageComponent;
