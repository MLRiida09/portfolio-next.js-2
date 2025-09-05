"use client";
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import styles from './Blog.module.css';
import ComingSoon from './ComingSoon';


const Blog = ({ theme, assets, posts }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    let filtered = posts || [];
    
    // Filter by category
    if (activeFilter !== 'all') {
      filtered = filtered.filter(post => post.category === activeFilter);
    }
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    return filtered;
  }, [posts, activeFilter, searchQuery]);

  // Get unique categories
  const categories = useMemo(() => {
    if (!posts) return [];
    const categorySet = new Set(posts.map(post => post.category));
    return [
      { id: 'all', name: 'All Posts', count: posts.length },
      ...Array.from(categorySet).map(category => ({
        id: category,
        name: category.charAt(0).toUpperCase() + category.slice(1),
        count: posts.filter(post => post.category === category).length
      }))
    ];
  }, [posts]);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  return (
    <div className={styles.blogContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className="section-title">
          <h1 className="section-title-text">My Blog</h1>
        </div>
        <p className={styles.headerDescription}>
          Thoughts, tutorials, and insights about web development, technology, and my journey in the tech world.
          Stay updated with my latest articles and discoveries.
        </p>
        
        {/* Search Bar 
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
*/}
        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{posts?.length || 0}</span>
            <span className={styles.statLabel}>Total Articles</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{categories.length - 1}</span>
            <span className={styles.statLabel}>Categories</span>
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
      {/* Blog Posts Grid 
      <div className={styles.postsGrid}>
        {filteredPosts.map((post, index) => (
          <article
            key={post.id}
            className={styles.postCard}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => openModal(post)}
          >
            <div className={styles.postImageContainer}>
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className={styles.postImage}
                />
              )}
              <div className={styles.overlay}>
                <span className={styles.viewText}>Read Article</span>
              </div>
              <div className={styles.categoryBadge}>
                {post.category}
              </div>
            </div>
            
            <div className={styles.postContent}>
              <div className={styles.postMeta}>
                <span className={styles.postDate}>{formatDate(post.date)}</span>
                <span className={styles.readTime}>{calculateReadTime(post.content)}</span>
              </div>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State 
      {filteredPosts.length === 0 && (
        <div className={styles.emptyState}>
          <h3>No articles found</h3>
          <p>
            {searchQuery 
              ? `No articles match your search "${searchQuery}"`
              : "No articles match the selected filter criteria."}
          </p>
          {searchQuery && (
            <button 
              className={styles.clearSearch}
              onClick={() => setSearchQuery('')}
            >
              Clear Search
            </button>
          )}
        </div>
      )}

      {/* Modal 
      {selectedPost && (
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
              {selectedPost.image && (
                <div className={styles.modalImageContainer}>
                  <Image
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    width={700}
                    height={300}
                    className={styles.modalImage}
                  />
                </div>
              )}
              
              <div className={styles.modalInfo}>
                <div className={styles.modalMeta}>
                  <span className={styles.modalCategory}>{selectedPost.category}</span>
                  <span className={styles.modalDate}>{formatDate(selectedPost.date)}</span>
                  <span className={styles.modalReadTime}>
                    {calculateReadTime(selectedPost.content)}
                  </span>
                </div>
                <h2 className={styles.modalTitle}>{selectedPost.title}</h2>
              </div>
            </div>
            
            <div className={styles.modalBody}>
              <div 
                className={styles.modalContent}
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
              
            </div>
            
            <div className={styles.modalFooter}>
              <div className={styles.shareButtons}>
                <span>Share this article:</span>
                <button className={styles.shareBtn}>
                  <i className="fa-brands fa-twitter"></i>
                </button>
                <button className={styles.shareBtn}>
                  <i className="fa-brands fa-linkedin"></i>
                </button>
                <button className={styles.shareBtn}>
                  <i className="fa-brands fa-facebook"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
        */}
    </div>
  );
};

export default Blog;