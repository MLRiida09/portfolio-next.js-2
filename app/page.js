"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import SectionTitle from "@/components/SectionTitle";
import HomeIntro from "@/components/HomeIntro";
import WelcomeGreeting from "@/components/WelcomeGreeting";
import { assets } from "@/public/assets/assets";

export default function Home() {
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
    <div className="PageContainer">
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      <WelcomeGreeting theme={theme} />
      
      <div className="MainContent">
        <SectionTitle title="Welcome to My Website" />
        <HomeIntro theme={theme} assets={assets} />
      </div>
    </div>
  );
}