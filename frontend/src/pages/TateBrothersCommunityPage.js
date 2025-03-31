import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ThreadCard from '../components/ThreadCard';
import communityData from '../utils/communityData';

const TateBrothersCommunityPage = () => {
  const community = communityData.find(c => c.slug === 'tate-brothers');
  
  // Mock threads for demonstration
  const [threads, setThreads] = useState([]);
  
  useEffect(() => {
    // Mock threads data
    const mockThreads = [
      {
        id: '1',
        title: 'Tristan Tate on Building Wealth and Financial Freedom',
        content: 'In this video, Tristan Tate discusses his approach to building wealth and achieving financial freedom through various business ventures.',
        imageUrl: 'https://i.imgur.com/placeholder9.jpg',
        youtubeVideoId: 'dQw4w9WgXcQ', // Example YouTube video ID
        createdAt: new Date().toISOString(),
        upvotes: 245,
        downvotes: 18,
        commentCount: 87,
        source: 'YouTube'
      },
      {
        id: '2',
        title: 'Andrew Tate\'s Perspective on Modern Society',
        content: 'Andrew Tate shares his controversial views on modern society and discusses what he believes are the key issues facing young men today.',
        imageUrl: 'https://i.imgur.com/placeholder10.jpg',
        youtubeVideoId: 'dQw4w9WgXcQ', // Example YouTube video ID
        createdAt: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
        upvotes: 312,
        downvotes: 45,
        commentCount: 124,
        source: 'YouTube'
      }
    ];
    
    setThreads(mockThreads);
  }, []);

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
            href={`/community/tate-brothers/category/${category.slug}`} 
            className="category-tab" 
            key={category.slug}
          >
            {category.name}
          </a>
        ))}
      </div>
      
      <a href="/new-thread" className="new-thread-button">Create New Thread</a>
      
      <div className="threads-container">
        <h2 className="section-title">Latest Clips and Content</h2>
        
        <div className="threads-list">
          {threads.length > 0 ? (
            threads.map(thread => (
              <ThreadCard key={thread.id} thread={thread} />
            ))
          ) : (
            <p className="placeholder-text">No threads available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TateBrothersCommunityPage;
