"use client";
import styles from './Languages.module.css';
import { assets, languages } from '@/public/assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';

function Languages() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.languagesSection}>
      <div className={styles.languageCard}>
        {/* Title Header with Toggle Button */}
        <div className={styles.languageHeader}>
          <div className="section-title">
            <h3>Languages</h3>
          </div>
          <button
            className={styles.toggleButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <Image
              src={isOpen ? assets.chevron_right : assets.chevron_down}
              alt={isOpen ? "chevron_up" : "chevron_down"}
              width={20}
              height={20}
              className={`${styles.chevronIcon} ${isOpen ? styles.rotated : ''}`}
            />
          </button>
        </div>
        
        {/* Languages List with smooth slide animation */}
        <div className={`${styles.languagesContainer} ${isOpen ? styles.open : ''}`}>
          <div className={styles.languagesList}>
            {languages.map((language, index) => (
              <div 
                key={language.id} 
                className={styles.languageItem}
                style={{ 
                  animationDelay: isOpen ? `${index * 0.1}s` : '0s',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                  transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`
                }}
              >
                <div className={styles.languageInfo}>
                  <div className={styles.languageNames}>
                    <p className={styles.languageName}>{language.name}</p>
                    <p className={styles.languageLevel}>{language.icando}</p>
                  </div>
                </div>
                <span className={styles.languageDescription}>{language.description}</span>
                <div className={styles.languageProgress}>
                  <div className={styles.progressBars}>
                    {Array.from({ length: language.maxLevel }, (_, idx) => {
                      const reversedIndex = language.maxLevel - 1 - idx;
                      return (
                        <div
                          key={reversedIndex}
                          className={`${styles.progressBar} ${
                            reversedIndex < language.level ? styles.filled : styles.empty
                          }`}
                          style={{
                            animationDelay: `${(reversedIndex * 0.1) + (index * 0.2)}s`
                          }}
                        />
                      );
                    })}
                    <div className={styles.batteryTip}></div>
                  </div>
                  <span className={styles.progressText}>
                    {language.level}/{language.maxLevel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Languages;