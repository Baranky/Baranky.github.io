import React, { useState } from "react";
import { Link as Scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./SidebarMenu.css";

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { name: "About", to: "resume-view", offset: -70 },
    { name: "Projects", to: "projects", offset: -70 },
    { name: "Articles", to: "articles", offset: -70 },
    { name: "Contact", to: "landing-page", offset: 0 },
  ];

  return (
    <>
      <button className="sidebar-menu__toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>
      <div className={`sidebar-menu__root ${isOpen ? "open" : ""}`}>
        <div className="sidebar-menu__header">
          <h3 className="sidebar-menu__title">Menu</h3>
          <button className="sidebar-menu__close" onClick={closeMenu}>
            <FaTimes size={20} />
          </button>
        </div>
        <nav className="sidebar-menu__nav">
          {menuItems.map((item, index) => (
            <Scroll
              key={index}
              to={item.to}
              offset={item.offset}
              smooth={true}
              onClick={closeMenu}
              className="sidebar-menu__item"
            >
              {item.name}
            </Scroll>
          ))}
        </nav>
      </div>
    </>
  );
};

export default SidebarMenu;

