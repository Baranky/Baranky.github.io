import React, { useState, useMemo } from "react";
import "./ProjectComponent.css";
import { projects } from "../../assets/data/projects";
import ProjectItem from "../ProjectItem/ProjectItem";
import TitleSeperatorComponent from "../TitleSeperatorComponent/TitleSeperatorComponent";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return projects.slice(startIndex, endIndex);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to projects section with offset for menu
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          const yOffset = -100; // Offset for any fixed headers
          const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
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
        <div className="project-component__pagination">
          <button
            className={`project-component__pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`project-component__pagination-btn ${currentPage === page ? "active" : ""}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          
          <button
            className={`project-component__pagination-btn ${currentPage === totalPages ? "disabled" : ""}`}
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

export default ProjectComponent;
