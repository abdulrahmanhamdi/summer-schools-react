import React from "react";
import { toggleTheme, useTheme } from "../utils/useTheme";

function Topbar() {
  useTheme();

  return (
    <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
      
      {/* زر القائمة للهاتف */}
      <button
        className="btn btn-sm"
        id="toggleSidebarBtn"
        style={{
          color: "var(--primary-color)",
          background: "transparent",
          border: "none"
        }}
        onClick={() => {
          document.getElementById("sidebar")?.classList.add("active");
          document.getElementById("overlay")?.classList.add("show");
        }}
      >
        <i className="bi bi-list fs-4"></i>
      </button>

      {/* أزرار اللغة والوضع الليلي */}
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-sm btn-outline-success">Türkçe</button>
        <button
          className="btn btn-sm btn-outline-success"
          onClick={() => alert("النسخة العربية تحت التطوير...")}
        >
          العربية
        </button>
        <button
          className="btn btn-sm btn-outline-secondary"
          id="themeToggleBtn"
          onClick={toggleTheme}
        >
          <i className="bi bi-moon-stars-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default Topbar;
