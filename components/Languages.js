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
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <Image
                src={assets.chevron_right}
                alt="chevron_up"
                width={20}
                height={20}
                className={styles.chevronIcon}
              />
            ) : (
              <Image
                src={assets.chevron_down}
                alt="chevron_down"
                width={20}
                height={20}
                className={styles.chevronIcon}
              />
            )}
          </button>
        </div>

        {/* Languages List - Only shows when isOpen is true */}
        {isOpen && (
          <div className={styles.languagesList}>
            {languages.map((language, index) => (
              <div key={language.id} className={styles.languageItem}>
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
        )}
      </div>
    </div>
  );
}

export default Languages;