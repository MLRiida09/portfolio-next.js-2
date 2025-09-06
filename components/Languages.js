"use client";
import React from 'react';
import styles from './Languages.module.css';
import { languages } from '@/public/assets/assets';

function Languages() {
  return (
    <div className={styles.languagesSection}>
      <div className="section-title">
        <h2 className="section-title-text">Languages</h2>
      </div>
      
      <div className={styles.languageCard}>
        {languages.map((language) => (
          <div key={language.id} className={styles.languageItem}>
            <div className={styles.languageHeader}>
              <div className={styles.languageInfo}>
                <div className={styles.languageNames}>
                  <h3 className={styles.languageName}>{language.name}</h3>
                </div>
              </div>
              <span className={styles.languageDescription}>{language.description}</span>
            </div>
            
            <div className={styles.languageProgress}>
              <div className={styles.progressBars}>
                {Array.from({ length: language.maxLevel }, (_, index) => {
                  const reversedIndex = language.maxLevel - 1 - index;
                  return (
                    <div
                      key={reversedIndex}
                      className={`${styles.progressBar} ${
                        reversedIndex < language.level ? styles.filled : styles.empty
                      }`}
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
  );
}

export default Languages;
