import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ThreadCard from '../components/ThreadCard';
import communityData from '../utils/communityData';

const ThenxCommunityPage = () => {
  const community = communityData.find(c => c.slug === 'thenx');
  
  // Mock threads for demonstration
  const [threads, setThreads] = useState([]);
  
  useEffect(() => {
    // Mock threads data
    const mockThreads = [
      {
        id: '1',
        title: 'Full Body Calisthenics Workout with Chris Heria',
        content: 'In this video, Chris Heria demonstrates a complete full body calisthenics workout that you can do at home with minimal equipment.',
        imageUrl: 'https://i.imgur.com/placeholder5.jpg',
        youtubeVideoId: 'oAPCPjnU1wA', // Example YouTube video ID
        createdAt: new Date().toISOString(),
        upvotes: 156,
        downvotes: 3,
        commentCount: 42,
        source: 'YouTube'
      },
      {
        id: '2',
        title: 'How to Master the Muscle Up - THENX Tutorial',
        content: 'Chris Heria breaks down the muscle up progression and shows you step by step how to achieve this advanced calisthenics move.',
        imageUrl: 'https://i.imgur.com/placeholder6.jpg',
        youtubeVideoId: 'Gpny7WAAZ0w', // Example YouTube video ID
        createdAt: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
        upvotes: 98,
        downvotes: 2,
        commentCount: 31,
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
            href={`/community/thenx/category/${category.slug}`} 
            className="category-tab" 
            key={category.slug}
          >
            {category.name}
          </a>
        ))}
      </div>
      
      <a href="/new-thread" className="new-thread-button">Create New Thread</a>
      
      <div className="threads-container">
        <h2 className="section-title">Latest Workout Videos</h2>
        
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

export default ThenxCommunityPage;
