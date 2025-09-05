'use client';

import React, { useState, useEffect } from 'react';
import styles from './ComingSoon.module.css';
import Image from 'next/image';

const ComingSoon = ({ assets, theme }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(75), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.comingSoonContainer}>
      <div className={styles.comingSoonContent}>
       
        <div className={styles.comingSoonIcon}>
        </div>

        {/* Main Message */}
        <h2 className={styles.comingSoonTitle}>Coming Soon!</h2>
        <p className={styles.comingSoonDescription}>
          I&apos;m working hard to bring you something amazing. 
          This section will showcase my latest projects and creations.
        </p>

        {/* Progress Bar */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className={styles.progressText}>{progress}% Complete</span>
        </div>

        {/* Feature List */}
        <div className={styles.featuresList}>
          <div className={styles.featureItem}>
            <span>Project Showcase</span>
          </div>
          <div className={styles.featureItem}>
            <span>Interactive Demos</span>
          </div>
          <div className={styles.featureItem}>
            <span>Source Code Links</span>
          </div>
          <div className={styles.featureItem}>
            <span>Project Details</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className={styles.comingSoonActions}>
          <a href="#" className="btn-main">
            Go Up
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className={styles.decorativeDots}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};

export default ComingSoon;
