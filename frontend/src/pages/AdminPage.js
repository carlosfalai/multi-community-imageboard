import React from 'react';
import Header from '../components/Header';
import RSSFetcher from '../components/RSSFetcher';

const AdminPage = () => {
  return (
    <div className="container">
      <Header />
      
      <h1 className="page-title">Admin Dashboard</h1>
      
      <div className="admin-section">
        <h2>RSS Integration Management</h2>
        <p>Manage the automatic creation of threads from YouTube videos.</p>
        
        <RSSFetcher />
      </div>
      
      <div className="admin-section">
        <h2>Scheduled Updates</h2>
        <p>The system automatically checks for new YouTube videos every hour and creates threads for them.</p>
        
        <div className="scheduled-info">
          <p><strong>Last check:</strong> {new Date().toLocaleString()}</p>
          <p><strong>Next check:</strong> {new Date(Date.now() + 3600000).toLocaleString()}</p>
          <p><strong>Status:</strong> Active</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
