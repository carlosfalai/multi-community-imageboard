import React from 'react';

const CommunityCard = ({ community }) => {
  return (
    <a 
      href={`/community/${community.slug}`} 
      className="community-card"
    >
      <img 
        src={community.backgroundImage} 
        alt={community.name} 
        className="community-card-bg"
      />
      <div className="community-card-content">
        <h3 className="community-card-title">{community.name}</h3>
        <p className="community-card-description">{community.shortDescription}</p>
      </div>
      {community.hasNewContent && (
        <div className="notification-badge">(1)</div>
      )}
    </a>
  );
};

export default CommunityCard;
