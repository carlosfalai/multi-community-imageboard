import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import communityData from '../utils/communityData';

const CommunityPage = () => {
  const { slug } = useParams();
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

  return (
    <div className="container">
      <Header />
      
      <div className="community-header" style={{ backgroundImage: `url(${community.backgroundImage})` }}>
        <div className="community-header-overlay">
          <h1 className="community-title">{community.name}</h1>
          <p className="community-description">{community.description}</p>
        </div>
      </div>
      
      <div className="category-tabs">
        {community.categories.map(category => (
          <a 
            href={`/community/${slug}/category/${category.slug}`} 
            className="category-tab" 
            key={category.slug}
          >
            {category.name}
          </a>
        ))}
      </div>
      
      <div className="threads-container">
        <h2 className="section-title">Latest Threads</h2>
        <div className="threads-list">
          <p className="placeholder-text">Threads will appear here once RSS integration is implemented.</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
