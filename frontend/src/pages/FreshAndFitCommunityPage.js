import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ThreadCard from '../components/ThreadCard';
import communityData from '../utils/communityData';

const FreshAndFitCommunityPage = () => {
  const community = communityData.find(c => c.slug === 'fresh-and-fit');
  
  // Mock threads for demonstration
  const [threads, setThreads] = useState([]);
  
  useEffect(() => {
    // Mock threads data
    const mockThreads = [
      {
        id: '1',
        title: 'Fresh & Fit Podcast: Dating in the Modern World',
        content: 'In this episode, Fresh & Fit discuss the challenges of dating in the modern world with special guests and take calls from viewers.',
        imageUrl: 'https://i.imgur.com/placeholder11.jpg',
        youtubeVideoId: 'dQw4w9WgXcQ', // Example YouTube video ID
        createdAt: new Date().toISOString(),
        upvotes: 178,
        downvotes: 23,
        commentCount: 64,
        source: 'YouTube'
      },
      {
        id: '2',
        title: 'Fresh & Fit Afterhours: Unfiltered Conversations',
        content: 'The Fresh & Fit crew goes unfiltered in this afterhours session, discussing topics that couldn\'t be covered in the main podcast.',
        imageUrl: 'https://i.imgur.com/placeholder12.jpg',
        youtubeVideoId: 'dQw4w9WgXcQ', // Example YouTube video ID
        createdAt: new Date(Date.now() - 518400000).toISOString(), // 6 days ago
        upvotes: 203,
        downvotes: 31,
        commentCount: 89,
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
            href={`/community/fresh-and-fit/category/${category.slug}`} 
            className="category-tab" 
            key={category.slug}
          >
            {category.name}
          </a>
        ))}
      </div>
      
      <a href="/new-thread" className="new-thread-button">Create New Thread</a>
      
      <div className="threads-container">
        <h2 className="section-title">Latest Podcast Episodes</h2>
        
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

export default FreshAndFitCommunityPage;
