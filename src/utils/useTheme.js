import { useEffect } from "react";

export function useTheme() {
  useEffect(() => {
    let savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      const hour = new Date().getHours();
      savedTheme = (hour >= 18 || hour < 6) ? "dark" : "light";
      localStorage.setItem("theme", savedTheme);
    }
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeButton(savedTheme);
  }, []);
}

export function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeButton(newTheme);
}

function updateThemeButton(theme) {
  const icon = document.querySelector("#themeToggleBtn i");
  if (icon) {
    icon.className = theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
  }
}
