import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ThreadCard from '../components/ThreadCard';
import communityData from '../utils/communityData';

const SiddhanathYogaCommunityPage = () => {
  const community = communityData.find(c => c.slug === 'siddhanath-yoga');
  
  // Mock threads for demonstration
  const [threads, setThreads] = useState([]);
  
  useEffect(() => {
    // Mock threads data
    const mockThreads = [
      {
        id: '1',
        title: 'Introduction to Siddhanath Yoga Practices',
        content: 'This video introduces the fundamental practices of Siddhanath Yoga Parampara, including breathing techniques and meditation methods.',
        imageUrl: 'https://i.imgur.com/placeholder13.jpg',
        youtubeVideoId: 'dQw4w9WgXcQ', // Example YouTube video ID
        createdAt: new Date().toISOString(),
        upvotes: 92,
        downvotes: 4,
        commentCount: 28,
        source: 'YouTube'
      },
      {
        id: '2',
        title: 'Spiritual Teachings from Siddhanath Yoga Parampara',
        content: 'An exploration of the spiritual philosophy behind Siddhanath Yoga Parampara and its application in daily life.',
        imageUrl: 'https://i.imgur.com/placeholder14.jpg',
        youtubeVideoId: 'dQw4w9WgXcQ', // Example YouTube video ID
        createdAt: new Date(Date.now() - 604800000).toISOString(), // 7 days ago
        upvotes: 76,
        downvotes: 2,
        commentCount: 19,
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
            href={`/community/siddhanath-yoga/category/${category.slug}`} 
            className="category-tab" 
            key={category.slug}
          >
            {category.name}
          </a>
        ))}
      </div>
      
      <a href="/new-thread" className="new-thread-button">Create New Thread</a>
      
      <div className="threads-container">
        <h2 className="section-title">Latest Yoga Teachings</h2>
        
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

export default SiddhanathYogaCommunityPage;
