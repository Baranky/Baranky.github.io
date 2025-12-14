import React, { useState, useEffect } from "react";
import "./WelcomeText.css";

const WelcomeText = () => {
  const roles = ["Software Engineer", "Java Developer", "Backend Developer", "Full Stack Developer"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[currentRole];
    let timeout;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.substring(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.substring(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <div className="welcome-text__root">
      <div className="welcome-text__wrapper">
        <span className="welcome-text__greeting">Hi there! 👋</span>
        <span className="welcome-text__item">
          I'm <strong className="welcome-text__item__strong">Baran Kaya</strong>
        </span>
        <span className="welcome-text__item">
          <span className="welcome-text__prefix">I am a </span>
          <strong className="welcome-text__item__strong welcome-text__role">
            {displayText}
            <span className="welcome-text__cursor">|</span>
          </strong>
        </span>
      </div>
    </div>
  );
};

export default WelcomeText;
