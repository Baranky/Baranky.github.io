import React, { useState, useMemo, useEffect } from "react";
import "./ArticleComponent.css";
import { articles } from "../../assets/data/articles";
import ArticleItem from "../ArticleItem/ArticleItem";
import TitleSeperatorComponent from "../TitleSeperatorComponent/TitleSeperatorComponent";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ArticleComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(articles.length / itemsPerPage);

  const currentArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return articles.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    // Reset to first page when itemsPerPage changes
    setCurrentPage(1);
  }, [itemsPerPage]);

  const handlePageChange = (page, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to articles section with offset for menu
      setTimeout(() => {
        const articlesSection = document.getElementById("articles");
        if (articlesSection) {
          const yOffset = -100; // Offset for any fixed headers
          const elementTop = articlesSection.getBoundingClientRect().top;
          const offsetTop = window.pageYOffset || document.documentElement.scrollTop;
          const y = elementTop + offsetTop + yOffset;
          const scrollPosition = Math.max(0, Math.min(y, document.documentElement.scrollHeight - window.innerHeight));
          window.scrollTo({ top: scrollPosition, behavior: "smooth" });
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
        <div className="article-component__pagination" onClick={(e) => e.stopPropagation()}>
          <button
            className={`article-component__pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
            onClick={(e) => handlePageChange(currentPage - 1, e)}
            disabled={currentPage === 1}
            type="button"
          >
            <FaChevronLeft />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`article-component__pagination-btn ${currentPage === page ? "active" : ""}`}
              onClick={(e) => handlePageChange(page, e)}
              type="button"
            >
              {page}
            </button>
          ))}
          
          <button
            className={`article-component__pagination-btn ${currentPage === totalPages ? "disabled" : ""}`}
            onClick={(e) => handlePageChange(currentPage + 1, e)}
            disabled={currentPage === totalPages}
            type="button"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ArticleComponent;

