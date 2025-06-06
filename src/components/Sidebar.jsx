import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

function Sidebar() {
  const closeSidebarOnClick = () => {
    if (window.innerWidth <= 768) {
      document.getElementById("sidebar")?.classList.remove("active");
      document.getElementById("overlay")?.classList.remove("show");
      setTimeout(() => {
        const btn = document.getElementById("toggleSidebarBtn");
        if (btn) btn.style.display = "block";
      }, 300);
    }
  };

  return (
    <>
      <div id="overlay" onClick={closeSidebarOnClick}></div>

      <div id="sidebar" className="d-flex flex-column">
        <div className="sidebar-header text-center mb-4">
          <NavLink to="/" onClick={closeSidebarOnClick}>
            <img src={logo} alt="Logo" className="sidebar-logo" />
          </NavLink>
          <h5 className="mt-2 fw-bold text-custom">Yaz Okulu Platformu</h5>
        </div>

        <nav className="nav flex-column px-3">
          <NavLink to="/" className="nav-link" onClick={closeSidebarOnClick}>
            <i className="bi bi-house-door-fill me-2"></i> Ana Sayfa
          </NavLink>
          <a href="#universiteler" className="nav-link" onClick={closeSidebarOnClick}>
            <i className="bi bi-building me-2"></i> Üniversiteler
          </a>
          <NavLink to="/contact" className="nav-link" onClick={closeSidebarOnClick}>
            <i className="bi bi-envelope-fill me-2"></i> İletişim
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeSidebarOnClick}>
            <i className="bi bi-info-circle-fill me-2"></i> Hakkında
          </NavLink>
        </nav>


      </div>
    </>
  );
}

export default Sidebar;
