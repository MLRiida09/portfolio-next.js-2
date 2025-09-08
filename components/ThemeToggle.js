"use client";
import React from 'react';
import Image from 'next/image';
import { assets } from '@/public/assets/assets';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <div className="theme-toggle-container">
      <button
        onClick={toggleTheme}
        className="theme-toggle-btn flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        <Image
          src={theme === "dark" ? assets.sun : assets.moon}
          height={20}
          width={20}
          alt="Theme Icon"
          id="theme-icon"
        />
        <span id="theme-text">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </div>
  );
}

export default ThemeToggle;
