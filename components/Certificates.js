"use client";
import { assets, certificates , categories } from '@/public/assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Certificates.module.css';
import ComingSoon from './ComingSoon';

const Certificates = ({ theme, assets }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const filteredCertificates = activeFilter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className={styles.certificatesContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className="section-title">
          <h1 className="section-title-text">My Certificates</h1>
        </div>
        <p className={styles.headerDescription}>
          A showcase of my professional certifications and achievements in various technologies and skills.
          Each certificate represents hours of dedicated learning and hands-on practice.
        </p>
        
        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{certificates.length}</span>
            <span className={styles.statLabel}>Total Certificates</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{new Set(certificates.map(cert => cert.issuer)).size}</span>
            <span className={styles.statLabel}>Institutions</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{new Set(certificates.flatMap(cert => cert.skills)).size}</span>
            <span className={styles.statLabel}>Skills Covered</span>
          </div>
        </div>
      </div>
      <div className={styles.filterTabs}>
        {categories.map(category => (
          <button
            key={category.id}
            className={`${styles.filterTab} ${activeFilter === category.id ? styles.active : ''}`}
            onClick={() => setActiveFilter(category.id)}
          >
            {category.name}
            <span className={styles.count}>({category.count})</span>
          </button>
        ))}
      </div>
     <ComingSoon />
     {/*
      Certificates Grid
      <div className={styles.certificatesGrid}>
        {filteredCertificates.map((certificate, index) => (
          <div
            key={certificate.id}
            className={styles.certificateCard}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => openModal(certificate)}
          >
            <div className={styles.certificateImageContainer}>
              <div className={styles.overlay}>
                <span className={styles.viewText}>View Certificate</span>
              </div>
            </div>
            
            <div className={styles.certificateContent}>
              <div className={styles.certificateHeader}>
                <h3 className={styles.certificateTitle}>{certificate.title}</h3>
                <span className={styles.certificateDate}>{certificate.date}</span>
              </div>
              
              <p className={styles.certificateIssuer}>
                {certificate.issuer}
              </p>
              
              <p className={styles.certificateDescription}>
                {certificate.description}
              </p>
              
              <div className={styles.skillTags}>
                {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
                {certificate.skills.length > 3 && (
                  <span className={styles.skillTag}>+{certificate.skills.length - 3}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      */}
      {/* Empty State 
      {filteredCertificates.length === 0 && (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>
            <i className="fa-solid fa-certificate"></i>
          </div>
          <h3>No certificates found</h3>
          <p>No certificates match the selected filter criteria.</p>
        </div>
      )}
      */}
      {/* Modal 
      {selectedCertificate && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>
              <Image
                src={theme === "dark" ? assets.close_dark : assets.close}
                alt="close icon"
                width={20}
                height={20}
              />
            </button>
            
            <div className={styles.modalHeader}>
              <div className={styles.modalInfo}>
                <h2 className={styles.modalTitle}>{selectedCertificate.title}</h2>
                <p className={styles.modalIssuer}>{selectedCertificate.issuer}</p>
                <p className={styles.modalDate}>Issued: {selectedCertificate.date}</p>
                <p className={styles.modalCredential}>
                  Credential ID: <code>{selectedCertificate.credentialId}</code>
                </p>
              </div>
            </div>
            <div className={styles.modalBody}>
              <h3>Description</h3>
              <p>{selectedCertificate.description}</p>
              <h3>Skills & Technologies</h3>
              <div className={styles.modalSkills}>
                {selectedCertificate.skills.map((skill, index) => (
                  <span key={index} className={styles.modalSkillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className={styles.modalFooter}>
              <a 
                href={selectedCertificate.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalVerifyBtn}
              >
                Verify Certificate
              </a>
            </div>
          </div>
        </div>
        
      )}
      */}
    </div>
  );
};

export default Certificates;