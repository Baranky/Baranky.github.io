import React from "react";
import "./ArticleItem.css";

const ArticleItem = (props) => {
  const { data } = props;
  const { title, description, link, date } = data;

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="tooltip">
      <div
        className="article-item__root"
        onClick={() => openInNewTab(link)}
      >
        <span className="article-item__date">{date}</span>
        <span className="article-item__title">{title}</span>
        <span className="article-item__description">{description}</span>
        <span className="tooltiptext">Yazıyı okumak için tıklayın</span>
      </div>
    </div>
  );
};

export default ArticleItem;

