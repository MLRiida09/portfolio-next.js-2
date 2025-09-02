"use client";
import React from 'react';
import { assets, MyInfo } from "@/public/assets/assets";
import CVButton from "./CVButton";

 function HomeIntro({ theme, assets }) {
  return (
    <div className="home-intro">
      <h3>
        I&apos;m <span className="highlight">{MyInfo.name}</span>
      </h3>
      <p>{MyInfo.description}</p>
      <CVButton theme={theme} assets={assets} />
    </div>
  );
}
export default HomeIntro 
