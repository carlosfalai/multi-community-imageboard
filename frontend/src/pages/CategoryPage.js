import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import communityData from '../utils/communityData';

const CategoryPage = () => {
  const { slug, categorySlug } = useParams();
  const community = communityData.find(c => c.slug === slug);
  
  if (!community) {
    return (
      <div className="container">
        <Header />
        <div className="error-message">
          <h2>Community not found</h2>
          <p>The community you're looking for doesn't exist.</p>
          <a href="/">Return to home</a>
        </div>
      </div>
    );
  }
  
  const category = community.categories.find(c => c.slug === categorySlug);
  
  if (!category) {
    return (
      <div className="container">
        <Header />
        <div className="error-message">
          <h2>Category not found</h2>
          <p>The category you're looking for doesn't exist in this community.</p>
          <a href={`/community/${slug}`}>Return to {community.name}</a>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Header />
      
      <div className="community-header" style={{ backgroundImage: `url(${community.backgroundImage})` }}>
        <div className="community-header-overlay">
          <h1 className="community-title">{community.name} - {category.name}</h1>
          <p className="community-description">{community.description}</p>
        </div>
      </div>
      
      <div className="category-tabs">
        {community.categories.map(cat => (
          <a 
            href={`/community/${slug}/category/${cat.slug}`} 
            className={`category-tab ${cat.slug === categorySlug ? 'active' : ''}`}
            key={cat.slug}
          >
            {cat.name}
          </a>
        ))}
      </div>
      
      <div className="threads-container">
        <h2 className="section-title">{category.name} Threads</h2>
        <div className="threads-list">
          <p className="placeholder-text">Threads for this category will appear here once RSS integration is implemented.</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
