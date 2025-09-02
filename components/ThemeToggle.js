"use client";
import React from 'react';


 function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="theme-toggle-container">
      <button onClick={toggleTheme} className="theme-toggle-btn">
        <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`} id="theme-icon"></i>
        <span id="theme-text">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </div>
  );
}
export default ThemeToggle 
