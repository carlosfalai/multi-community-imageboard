import React, { useState } from 'react';
import communityData from '../utils/communityData';
import Header from '../components/Header';
import CommunityCard from '../components/CommunityCard';
import SearchBar from '../components/SearchBar';

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCommunities = communityData.filter(community => 
    community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    community.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Header />
      
      <h1 className="page-title">Imageboard Communities</h1>
      
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
      
      <div className="communities-grid">
        {filteredCommunities.map((community) => (
          <CommunityCard 
            key={community.slug} 
            community={community} 
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
