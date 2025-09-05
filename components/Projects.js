"use client";
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import ComingSoon from './ComingSoon';
import styles from './Projects.module.css';

const Projects = ({ theme, assets, projects }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects
  const filteredProjects = useMemo(() => {
    let filtered = projects || [];
    
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => project.category === activeFilter);
    }
    
    return filtered;
  }, [projects, activeFilter]);

  // Get unique categories
  const categories = useMemo(() => {
    if (!projects) return [];
    const categorySet = new Set(projects.map(project => project.category));
    return [
      { id: 'all', name: 'All Projects', count: projects.length },
      ...Array.from(categorySet).map(category => ({
        id: category,
        name: category.charAt(0).toUpperCase() + category.slice(1),
        count: projects.filter(project => project.category === category).length
      }))
    ];
  }, [projects]);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#10b981';
      case 'in-progress': return '#f59e0b';
      case 'planning': return '#6b7280';
      default: return '#10b981';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planning': return 'Planning';
      default: return 'Completed';
    }
  };

  return (
    <div className={styles.projectsContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className="section-title">
          <h1 className="section-title-text">My Projects</h1>
        </div>
        <p className={styles.headerDescription}>
          A collection of my latest work and personal projects. Each project represents 
          my passion for creating innovative solutions and learning new technologies.
        </p>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{projects?.length || 0}</span>
            <span className={styles.statLabel}>Total Projects</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>
              {projects?.filter(p => p.status === 'completed').length || 0}
            </span>
            <span className={styles.statLabel}>Completed</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>
              {projects?.reduce((total, project) => total + (project.technologies?.length || 0), 0) || 0}
            </span>
            <span className={styles.statLabel}>Technologies Used</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
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
  {/* Modal 
      {/* Projects Grid 
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={styles.projectCard}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => openModal(project)}
          >
            <div className={styles.projectImageContainer}>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className={styles.projectImage}
                />
              )}
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.viewText}>View Project</span>
                  <div className={styles.projectLinks}>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fa-solid fa-external-link"></i>
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fa-brands fa-github"></i>
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Status Badge 
              <div 
                className={styles.statusBadge}
                style={{ backgroundColor: getStatusColor(project.status) }}
              >
                {getStatusText(project.status)}
              </div>
            </div>
            
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectMeta}>
                  <span className={styles.projectDate}>{project.year}</span>
                </div>
              </div>
              
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.technologies}>
                {project.technologies?.slice(0, 4).map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
                {project.technologies?.length > 4 && (
                  <span className={styles.techTag}>+{project.technologies.length - 4}</span>
                )}
              </div>

              <div className={styles.projectFooter}>
                <div className={styles.projectCategory}>
                  <i className="fa-solid fa-folder"></i>
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State 
      {filteredProjects.length === 0 && (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>
            <i className="fa-solid fa-folder-open"></i>
          </div>
          <h3>No projects found</h3>
          <p>No projects match the selected filter criteria.</p>
        </div>
      )}

      {/* Modal *
      {selectedProject && (
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
              {selectedProject.image && (
                <div className={styles.modalImageContainer}>
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={800}
                    height={400}
                    className={styles.modalImage}
                  />
                </div>
              )}
              
              <div className={styles.modalInfo}>
                <div className={styles.modalMeta}>
                  <span 
                    className={styles.modalStatus}
                    style={{ backgroundColor: getStatusColor(selectedProject.status) }}
                  >
                    {getStatusText(selectedProject.status)}
                  </span>
                  <span className={styles.modalCategory}>{selectedProject.category}</span>
                  <span className={styles.modalYear}>{selectedProject.year}</span>
                </div>
                
                <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                <p className={styles.modalDescription}>{selectedProject.fullDescription || selectedProject.description}</p>
              </div>
            </div>
            
            <div className={styles.modalBody}>
              {selectedProject.features && (
                <div className={styles.featuresSection}>
                  <h3>Key Features</h3>
                  <ul className={styles.featuresList}>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.challenges && (
                <div className={styles.challengesSection}>
                  <h3>Challenges & Solutions</h3>
                  <p>{selectedProject.challenges}</p>
                </div>
              )}

              <div className={styles.technologiesSection}>
                <h3>Technologies Used</h3>
                <div className={styles.modalTechnologies}>
                  {selectedProject.technologies?.map((tech, index) => (
                    <span key={index} className={styles.modalTechTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.screenshots && (
                <div className={styles.screenshotsSection}>
                  <h3>Screenshots</h3>
                  <div className={styles.screenshotsGrid}>
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <div key={index} className={styles.screenshotItem}>
                        <Image
                          src={screenshot.url}
                          alt={screenshot.caption}
                          width={300}
                          height={200}
                          className={styles.screenshotImage}
                        />
                        <p className={styles.screenshotCaption}>{screenshot.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className={styles.modalFooter}>
              <div className={styles.modalActions}>
                {selectedProject.liveUrl && (
                  <a 
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalActionBtn}
                  >
                    <i className="fa-solid fa-external-link"></i>
                    View Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a 
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.modalActionBtn} ${styles.secondary}`}
                  >
                    <i className="fa-brands fa-github"></i>
                    View Source Code
                  </a>
                )}
                
              </div>
            </div>
          </div>
        </div>
      )}
    */}
    </div>
  );
};

export default Projects;