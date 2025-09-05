"use client";

import React, { useState, useEffect } from "react";
import styles from "./WelcomeGreeting.module.css";
import Image from "next/image";
import { assets, greetings } from "@/public/assets/assets";

const WelcomeGreeting = ({ theme }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    const showTimer = setTimeout(() => setIsVisible(true), 500);

    
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 3000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, []);

  const handleClose = () => {
    const container = document.querySelector(`.${styles.welcomeContainer}`);
    if (container) {
      container.classList.add(styles.fadeOut);
      setTimeout(() => setIsVisible(false), 600);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`${styles.welcomeContainer} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <div className={styles.welcomeCard}>
        <button className={styles.closeButton} onClick={handleClose}>
          <Image
            src={theme === "dark" ? assets.close_dark : assets.close}
            alt="close icon"
            width={20}
            height={20}
          />
        </button>

        
        <div className={styles.iconContainer}>
          <div className={styles.sparkles}>
            <span className={styles.sparkle}></span>
            <span className={styles.sparkle}></span>
            <span className={styles.sparkle}></span>
          </div>
        </div>

        
        <div className={styles.greetingText}>
          <h3 className={styles.mainGreeting}>
            {greetings[currentGreeting].text}
          </h3>
        </div>

        
        <div className={styles.progressDots}>
          {greetings.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentGreeting ? styles.active : ""
              }`}
            ></span>
          ))}
        </div>
        <div className={styles.decorativeElements}>
          <div className={styles.circle}></div>
          <div className={styles.triangle}></div>
          <div className={styles.square}></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeGreeting;
