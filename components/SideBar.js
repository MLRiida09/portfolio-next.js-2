// src/components/Sidebar.js
"use client"
import Profile from "./Profile";
import NavMenu from "./NavMenu";
import ThemeToggle from "./ThemeButton";

export default function Sidebar() {
  return (
    <div className="side-bar">
      <Profile />
      <NavMenu />
      <ThemeToggle />
    </div>
  );
}
