import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ThreadCard from '../components/ThreadCard';
import communityData from '../utils/communityData';

const InfoWarsCommunityPage = () => {
  const { slug } = useParams();
  const community = communityData.find(c => c.slug === 'infowars');
  
  // Mock threads for demonstration
  const [threads, setThreads] = useState([]);
  
  useEffect(() => {
    // Mock threads data
    const mockThreads = [
      {
        id: '1',
        title: 'Times Alex Jones Was Right: The Chemicals in the Water',
        content: 'This thread discusses the evidence supporting Alex Jones\' claims about chemicals in the water affecting wildlife.',
        imageUrl: 'https://i.imgur.com/placeholder3.jpg',
        youtubeVideoId: 'WX_pJR9l5HY', // Example YouTube video ID
        createdAt: new Date().toISOString(),
        upvotes: 42,
        downvotes: 5,
        commentCount: 18,
        source: 'YouTube'
      },
      {
        id: '2',
        title: 'Alex Jones Predicted This Current Event',
        content: 'A compilation of Alex Jones predictions that later came true, with evidence and timeline.',
        imageUrl: 'https://i.imgur.com/placeholder4.jpg',
        createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        upvotes: 37,
        downvotes: 8,
        commentCount: 23,
        source: 'User'
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
            href={`/community/infowars/category/${category.slug}`} 
            className="category-tab" 
            key={category.slug}
          >
            {category.name}
          </a>
        ))}
      </div>
      
      <a href="/new-thread" className="new-thread-button">Create New Thread</a>
      
      <div className="threads-container">
        <h2 className="section-title">Latest Threads</h2>
        
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

export default InfoWarsCommunityPage;
