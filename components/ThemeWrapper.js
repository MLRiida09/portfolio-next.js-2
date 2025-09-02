"use client"; 
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function ThemeWrapper({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="page-container">
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      <div className="main-content">{children}</div>
    </div>
  );
}
