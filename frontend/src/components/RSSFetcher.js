import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RSSFetcher = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const fetchRSSFeeds = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get('/api/rss/fetch');
      setResults(response.data.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch RSS feeds');
      console.error('Error fetching RSS feeds:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rss-fetcher">
      <h2>YouTube RSS Integration</h2>
      <p>
        This tool fetches the latest videos from YouTube channels and creates threads automatically.
      </p>
      
      <button 
        className="fetch-button" 
        onClick={fetchRSSFeeds}
        disabled={loading}
      >
        {loading ? 'Fetching...' : 'Fetch Latest Videos'}
      </button>
      
      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
      
      {results && (
        <div className="results">
          <h3>Results:</h3>
          <ul className="results-list">
            {Object.entries(results).map(([community, result]) => (
              <li key={community} className={result.success ? 'success' : 'error'}>
                <strong>{community}:</strong> {' '}
                {result.success 
                  ? `${result.threadsCreated} new threads created` 
                  : `Error: ${result.error}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RSSFetcher;
