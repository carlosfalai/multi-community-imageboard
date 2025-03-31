import React from 'react';

const ThreadCard = ({ thread }) => {
  return (
    <div className="thread-card">
      {thread.youtubeVideoId && (
        <div className="thread-video">
          <iframe 
            width="100%" 
            height="200" 
            src={`https://www.youtube.com/embed/${thread.youtubeVideoId}`} 
            title={thread.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      )}
      
      {thread.imageUrl && !thread.youtubeVideoId && (
        <div className="thread-image">
          <img src={thread.imageUrl} alt={thread.title} />
        </div>
      )}
      
      <div className="thread-content">
        <h3 className="thread-title">{thread.title}</h3>
        <p className="thread-excerpt">{thread.content.substring(0, 150)}...</p>
        
        <div className="thread-meta">
          <span className="thread-date">{new Date(thread.createdAt).toLocaleDateString()}</span>
          <div className="thread-stats">
            <span className="thread-upvotes">{thread.upvotes} ↑</span>
            <span className="thread-downvotes">{thread.downvotes} ↓</span>
            <span className="thread-comments">Comments: {thread.commentCount || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadCard;
