import React, { useState, useMemo, useEffect } from "react";
import "./ProjectComponent.css";
import { projects } from "../../assets/data/projects";
import ProjectItem from "../ProjectItem/ProjectItem";
import TitleSeperatorComponent from "../TitleSeperatorComponent/TitleSeperatorComponent";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectComponent = () => {
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

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return projects.slice(startIndex, endIndex);
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
      // Scroll to projects section with offset for menu
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          const yOffset = -100; // Offset for any fixed headers
          const elementTop = projectsSection.getBoundingClientRect().top;
          const offsetTop = window.pageYOffset || document.documentElement.scrollTop;
          const y = elementTop + offsetTop + yOffset;
          const scrollPosition = Math.max(0, Math.min(y, document.documentElement.scrollHeight - window.innerHeight));
          window.scrollTo({ top: scrollPosition, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <div className="project-component__root" id="projects">
      <TitleSeperatorComponent text="Projects" />
      <div className="project-component__projects">
        {currentProjects.map((project, index) => {
          return <ProjectItem key={index} data={project} />;
        })}
      </div>
      
      {totalPages > 1 && (
        <div className="project-component__pagination" onClick={(e) => e.stopPropagation()}>
          <button
            className={`project-component__pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
            onClick={(e) => handlePageChange(currentPage - 1, e)}
            disabled={currentPage === 1}
            type="button"
          >
            <FaChevronLeft />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`project-component__pagination-btn ${currentPage === page ? "active" : ""}`}
              onClick={(e) => handlePageChange(page, e)}
              type="button"
            >
              {page}
            </button>
          ))}
          
          <button
            className={`project-component__pagination-btn ${currentPage === totalPages ? "disabled" : ""}`}
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

export default ProjectComponent;
