"use client";
import React from 'react';
import styles from './Languages.module.css';
import { languages } from '@/public/assets/assets';





function Languages() {
  return (
    <div className={styles.languagesSection}>
      
      
      <div className={styles.languagesContainer}>
        {languages.map((language) => (
          <div key={language.id} className={styles.languageCard}>
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
                {Array.from({ length: language.maxLevel }, (_, index) => (
                  <div 
                    key={index}
                    className={`${styles.progressBar} ${
                      index < language.level ? styles.filled : styles.empty
                    }`}
                  />
                ))}
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