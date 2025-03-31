import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ThreadCard from '../components/ThreadCard';
import communityData from '../utils/communityData';

const SamShamounCommunityPage = () => {
  const community = communityData.find(c => c.slug === 'sam-shamoun');
  
  // Mock threads for demonstration
  const [threads, setThreads] = useState([]);
  
  useEffect(() => {
    // Mock threads data
    const mockThreads = [
      {
        id: '1',
        title: 'Christianity and Islam: A Comparative Analysis',
        content: 'Sam Shamoun explores the key theological differences between Christianity and Islam, focusing on the nature of God, salvation, and scriptural authority.',
        imageUrl: 'https://i.imgur.com/placeholder7.jpg',
        youtubeVideoId: 'dQw4w9WgXcQ', // Example YouTube video ID
        createdAt: new Date().toISOString(),
        upvotes: 87,
        downvotes: 12,
        commentCount: 34,
        source: 'YouTube'
      },
      {
        id: '2',
        title: 'The Works of Lord Jesus Christ: Biblical Perspectives',
        content: 'An in-depth analysis of the works of Jesus Christ as described in the New Testament and their significance for Christian theology.',
        imageUrl: 'https://i.imgur.com/placeholder8.jpg',
        youtubeVideoId: 'dQw4w9WgXcQ', // Example YouTube video ID
        createdAt: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
        upvotes: 112,
        downvotes: 5,
        commentCount: 47,
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
            href={`/community/sam-shamoun/category/${category.slug}`} 
            className="category-tab" 
            key={category.slug}
          >
            {category.name}
          </a>
        ))}
      </div>
      
      <a href="/new-thread" className="new-thread-button">Create New Thread</a>
      
      <div className="threads-container">
        <h2 className="section-title">Latest Discussions</h2>
        
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

export default SamShamounCommunityPage;
