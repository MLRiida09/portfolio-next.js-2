"use client";

import { assets } from "@/public/assets/assets";
import Profile from "./Profile";
import NavMenu from "./NavMenu";
import ThemeToggle from "./ThemeToggle";
import React from 'react'

function Sidebar({theme , toggleTheme}) {
  return (
    <div className="side-bar">
      <Profile      assets={assets} />
      <NavMenu      assets={assets} theme={theme} />
      <ThemeToggle  theme={theme} toggleTheme={toggleTheme} /> 
    </div>
  )
}

export default Sidebar





