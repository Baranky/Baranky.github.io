import React, { useState, useMemo } from "react";
import "./ArticleComponent.css";
import { articles } from "../../assets/data/articles";
import ArticleItem from "../ArticleItem/ArticleItem";
import TitleSeperatorComponent from "../TitleSeperatorComponent/TitleSeperatorComponent";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ArticleComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const currentArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return articles.slice(startIndex, endIndex);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to articles section with offset for menu
      setTimeout(() => {
        const articlesSection = document.getElementById("articles");
        if (articlesSection) {
          const yOffset = -100; // Offset for any fixed headers
          const y = articlesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <div className="article-component__root" id="articles">
      <TitleSeperatorComponent text="Articles" />
      <div className="article-component__articles">
        {currentArticles.map((article, index) => {
          return <ArticleItem key={index} data={article} />;
        })}
      </div>
      
      {totalPages > 1 && (
        <div className="article-component__pagination">
          <button
            className={`article-component__pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`article-component__pagination-btn ${currentPage === page ? "active" : ""}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          
          <button
            className={`article-component__pagination-btn ${currentPage === totalPages ? "disabled" : ""}`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ArticleComponent;

