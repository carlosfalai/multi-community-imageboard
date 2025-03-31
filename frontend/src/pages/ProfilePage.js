import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [anonymitySettings, setAnonymitySettings] = useState({
    infoWars: true,
    thenx: true,
    samShamoun: true,
    tate: true,
    freshAndFit: true,
    siddhanathYoga: true,
    pol: true
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        navigate('/login');
        return;
      }
      
      try {
        const res = await axios.get('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        setUser(res.data.data);
        if (res.data.data.preferences && res.data.data.preferences.anonymitySettings) {
          setAnonymitySettings(res.data.data.preferences.anonymitySettings);
        }
      } catch (err) {
        setError('Failed to load profile');
        console.error('Profile fetch error:', err);
        
        // If unauthorized, redirect to login
        if (err.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserProfile();
  }, [navigate]);

  const handleAnonymityChange = (community) => {
    setAnonymitySettings({
      ...anonymitySettings,
      [community]: !anonymitySettings[community]
    });
  };

  const saveAnonymitySettings = async () => {
    const token = localStorage.getItem('token');
    
    try {
      await axios.put('/api/auth/anonymity', 
        { anonymitySettings },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      setUpdateSuccess(true);
      setTimeout(() => setUpdateSuccess(false), 3000);
    } catch (err) {
      setError('Failed to update anonymity settings');
      console.error('Update anonymity error:', err);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="container">
        <Header />
        <div className="loading">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="container">
      <Header />
      
      <div className="profile-container">
        <h1>Your Profile</h1>
        
        {error && <div className="error-message">{error}</div>}
        {updateSuccess && <div className="success-message">Settings updated successfully!</div>}
        
        {user && (
          <div className="profile-details">
            <div className="profile-section">
              <h2>Account Information</h2>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Age Verification:</strong> {user.isAdult ? 'Verified 18+' : 'Not verified'}</p>
            </div>
            
            <div className="profile-section">
              <h2>Anonymity Settings</h2>
              <p className="section-description">
                Toggle anonymity for each community. When turned on, your posts will be anonymous.
                When turned off, your username will be displayed.
              </p>
              
              <div className="anonymity-toggles">
                <div className="toggle-item">
                  <label htmlFor="infoWars">InfoWars (Alex Jones)</label>
                  <div className="toggle-switch">
                    <input
                      type="checkbox"
                      id="infoWars"
                      checked={anonymitySettings.infoWars}
                      onChange={() => handleAnonymityChange('infoWars')}
                    />
                    <span className="toggle-slider"></span>
                  </div>
                </div>
                
                <div className="toggle-item">
                  <label htmlFor="thenx">THENX (Chris Heria)</label>
                  <div className="toggle-switch">
                    <input
                      type="checkbox"
                      id="thenx"
                      checked={anonymitySettings.thenx}
                      onChange={() => handleAnonymityChange('thenx')}
                    />
                    <span className="toggle-slider"></span>
                  </div>
                </div>
                
                <div className="toggle-item">
                  <label htmlFor="samShamoun">Sam Shamoun</label>
                  <div className="toggle-switch">
                    <input
                      type="checkbox"
                      id="samShamoun"
                      checked={anonymitySettings.samShamoun}
                      onChange={() => handleAnonymityChange('samShamoun')}
                    />
                    <span className="toggle-slider"></span>
                  </div>
                </div>
                
                <div className="toggle-item">
                  <label htmlFor="tate">Tristan and Andrew Tate</label>
                  <div className="toggle-switch">
                    <input
                      type="checkbox"
                      id="tate"
                      checked={anonymitySettings.tate}
                      onChange={() => handleAnonymityChange('tate')}
                    />
                    <span className="toggle-slider"></span>
                  </div>
                </div>
                
                <div className="toggle-item">
                  <label htmlFor="freshAndFit">Fresh and Fit</label>
                  <div className="toggle-switch">
                    <input
                      type="checkbox"
                      id="freshAndFit"
                      checked={anonymitySettings.freshAndFit}
                      onChange={() => handleAnonymityChange('freshAndFit')}
                    />
                    <span className="toggle-slider"></span>
                  </div>
                </div>
                
                <div className="toggle-item">
                  <label htmlFor="siddhanathYoga">Siddhanath Yoga Parampara</label>
                  <div className="toggle-switch">
                    <input
                      type="checkbox"
                      id="siddhanathYoga"
                      checked={anonymitySettings.siddhanathYoga}
                      onChange={() => handleAnonymityChange('siddhanathYoga')}
                    />
                    <span className="toggle-slider"></span>
                  </div>
                </div>
                
                <div className="toggle-item">
                  <label htmlFor="pol">4chan /pol/</label>
                  <div className="toggle-switch">
                    <input
                      type="checkbox"
                      id="pol"
                      checked={anonymitySettings.pol}
                      onChange={() => handleAnonymityChange('pol')}
                    />
                    <span className="toggle-slider"></span>
                  </div>
                </div>
              </div>
              
              <button className="save-button" onClick={saveAnonymitySettings}>
                Save Anonymity Settings
              </button>
            </div>
            
            <button className="logout-button" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
