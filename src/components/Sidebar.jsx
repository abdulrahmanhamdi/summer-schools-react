import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";

function Sidebar() {
  const location = useLocation();

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

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const isOnHome = location.pathname === "/";

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

          {isOnHome && (
            <>
              <a href="#tavsiyeler" className="nav-link" onClick={closeSidebarOnClick}>
                <i className="bi bi-lightbulb me-2"></i> Tavsiyeler
              </a>
              <a href="#hakkimizda" className="nav-link" onClick={closeSidebarOnClick}>
                <i className="bi bi-person-badge me-2"></i> Hakkımızda
              </a>
              <a href="#sss" className="nav-link" onClick={closeSidebarOnClick}>
                <i className="bi bi-question-circle-fill me-2"></i> SSS
              </a>
            </>
          )}

          <NavLink to="/universiteler" className="nav-link" onClick={closeSidebarOnClick}>
            <i className="bi bi-building me-2"></i> Üniversiteler
          </NavLink>

          <NavLink to="/contact" className="nav-link" onClick={closeSidebarOnClick}>
            <i className="bi bi-envelope-fill me-2"></i> İletişim
          </NavLink>

          {/* 🔵 Giriş Yap - فقط إذا لم يكن مسجلًا */}
          {!isLoggedIn && (
            <NavLink to="/login" className="nav-link" onClick={closeSidebarOnClick}>
              <i className="bi bi-box-arrow-in-right me-2"></i> Giriş Yap
            </NavLink>
          )}

          {/* 🔴 Çıkış Yap - فقط إذا كان مسجلًا */}
          {isLoggedIn && (
            <>
              <hr />
              <button
                onClick={() => {
                  localStorage.removeItem("isLoggedIn");
                  window.location.href = "/login";
                }}
                className="btn btn-outline-danger mt-2"
              >
                <i className="bi bi-box-arrow-right me-2"></i> Çıkış Yap
              </button>
            </>
          )}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
