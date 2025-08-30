"use client";

import { assets, MyInfo, contactme } from "@/public/assets/assets";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Head>
        <title>MY Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </Head>

      <div className="side-bar">
        {/* Sidebar Navigation */}
        <div className="profile">
          <Image
            src={assets.profile}
            alt="profile picture"
            width={120}
            height={120}
          />
          <span>Mellal Rida</span>
        </div>

        <ul className="sidebar-menu">
          <li>
            <Link href="/">
              <Image
              src={theme === "dark" ? assets.house_dark : assets.house}
              alt="icon house"
              width={20}
              height={20}
              /> Home
            </Link>
          </li>
          <li>
            <Link href="/Certificates">
              <Image
              src={theme == "dark" ? assets.cap_dark : assets.cap} 
              alt="icon certificate" 
              width={20} 
              height={20}
              />
               Certificates
            </Link>
          </li>
          <li>
            <Link href="/Project">
              <Image 
              src={theme == "dark" ? assets.project_dark : assets.project} 
              alt="icon project" 
              width={20} 
              height={20} 
              />
              Project
            </Link>
          </li>
          <li>
            <Link href="/Blog">
              <Image
              src={theme == "dark" ? assets.blog_dark : assets.blog} 
              alt="icon blog" 
              width={20} 
              height={20} 
              />
              Blog
            </Link>
          </li>
        </ul>

        {/* Theme Toggle Button */}
        <div className="theme-toggle-container">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            <i
              className={`fa-solid ${
                theme === "dark" ? "fa-sun" : "fa-moon"
              }`}
              id="theme-icon"
            ></i>
            <span id="theme-text">
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="section-title">
          <div className="section-title-text center">
            <h2>Welcome to My Website</h2>
          </div>
        </div>

        <div className="home-intro">
          <h3>
            I&apos;m <span className="highlight">{MyInfo.name}</span>
          </h3>
          <p>
            {MyInfo.description}
          </p>

          <div className="cv-container">
            <a href="#" download className="btn-main">
              <i className="fas fa-file-alt"></i>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
