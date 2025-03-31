import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ThreadCard from '../components/ThreadCard';
import communityData from '../utils/communityData';

const PolCommunityPage = () => {
  const { slug } = useParams();
  const community = communityData.find(c => c.slug === slug);
  const [isAdult, setIsAdult] = useState(false);
  const [showAgeVerification, setShowAgeVerification] = useState(true);
  
  // Mock threads for demonstration
  const [threads, setThreads] = useState([]);
  
  useEffect(() => {
    // Check if user has already verified age
    const verified = localStorage.getItem('ageVerified');
    if (verified === 'true') {
      setIsAdult(true);
      setShowAgeVerification(false);
    }
    
    // Mock threads data
    const mockThreads = [
      {
        id: '1',
        title: 'Important Political Discussion',
        content: 'This is a filtered thread from 4chan /pol/ board. Content has been filtered to remove NSFW, LGBT, and other content as defined by user preferences.',
        imageUrl: 'https://i.imgur.com/placeholder1.jpg',
        createdAt: new Date().toISOString(),
        upvotes: 15,
        downvotes: 3,
        commentCount: 7,
        source: '4chan',
        importedFrom4chan: true
      },
      {
        id: '2',
        title: 'Current Events Analysis',
        content: 'This is another filtered thread from 4chan /pol/ board discussing current political events and their implications.',
        imageUrl: 'https://i.imgur.com/placeholder2.jpg',
        createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        upvotes: 24,
        downvotes: 5,
        commentCount: 12,
        source: '4chan',
        importedFrom4chan: true
      }
    ];
    
    setThreads(mockThreads);
  }, []);
  
  const handleAgeVerification = (isAdult) => {
    if (isAdult) {
      setIsAdult(true);
      localStorage.setItem('ageVerified', 'true');
    } else {
      // Redirect to home if not adult
      window.location.href = '/';
    }
    setShowAgeVerification(false);
  };
  
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
      {showAgeVerification && (
        <div className="age-verification">
          <div className="age-verification-content">
            <h2>Age Verification Required</h2>
            <p>This community contains content that requires you to be 18 years or older to view. Are you over 18 years old?</p>
            <div className="age-verification-buttons">
              <button 
                className="age-verification-button yes" 
                onClick={() => handleAgeVerification(true)}
              >
                Yes, I am 18 or older
              </button>
              <button 
                className="age-verification-button no" 
                onClick={() => handleAgeVerification(false)}
              >
                No, I am under 18
              </button>
            </div>
          </div>
        </div>
      )}
      
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
        <h2 className="section-title">Filtered Threads from 4chan /pol/</h2>
        <p className="filter-notice">Content is filtered to block NSFW, LGBT, and 'degenerate' content as defined by user preferences.</p>
        
        {isAdult ? (
          <div className="threads-list">
            {threads.length > 0 ? (
              threads.map(thread => (
                <ThreadCard key={thread.id} thread={thread} />
              ))
            ) : (
              <p className="placeholder-text">No threads available at the moment.</p>
            )}
          </div>
        ) : (
          <p className="placeholder-text">You must verify your age to view content in this community.</p>
        )}
      </div>
    </div>
  );
};

export default PolCommunityPage;
