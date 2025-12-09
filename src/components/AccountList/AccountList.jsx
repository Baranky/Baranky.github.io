import React from "react";
import "./AccountList.css";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaStackOverflow,
} from "react-icons/fa";
const AccountList = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="account-list__root">
      <div
        className="account-list__item gitHub"
        onClick={() => openInNewTab("https://github.com/baranky")}
      >
        <FaGithub size={36} />
      </div>
      <div
        className="account-list__item stackOverFlow"
        onClick={() =>
          openInNewTab("https://stackoverflow.com/users/23356875/baran-kaya")
        }
      >
        <FaStackOverflow size={36} />
      </div>{" "}
      <div
        className="account-list__item mediumBlog"
        onClick={() => openInNewTab("https://medium.com/@baranky2104")}
      >
        <FaMedium size={36} />
      </div>
      <div
        className="account-list__item linkedIn"
        onClick={() => openInNewTab("https://www.linkedin.com/in/baran-kaya-85801b267/")}
      >
        <FaLinkedin size={36} />
      </div>
      </div>
  );
};

export default AccountList;
