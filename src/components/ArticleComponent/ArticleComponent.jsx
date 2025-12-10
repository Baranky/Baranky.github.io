import React from "react";
import "./ArticleComponent.css";
import { articles } from "../../assets/data/articles";
import ArticleItem from "../ArticleItem/ArticleItem";
import TitleSeperatorComponent from "../TitleSeperatorComponent/TitleSeperatorComponent";

const ArticleComponent = () => {
  return (
    <div className="article-component__root">
      <TitleSeperatorComponent text="Yazılarım" />
      <div className="article-component__articles">
        {articles.map((article, index) => {
          return <ArticleItem key={index} data={article} />;
        })}
      </div>
    </div>
  );
};

export default ArticleComponent;

