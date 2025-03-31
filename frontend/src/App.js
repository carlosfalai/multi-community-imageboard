import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CommunityPage from './pages/CommunityPage';
import CategoryPage from './pages/CategoryPage';
import PolCommunityPage from './pages/PolCommunityPage';
import InfoWarsCommunityPage from './pages/InfoWarsCommunityPage';
import ThenxCommunityPage from './pages/ThenxCommunityPage';
import SamShamounCommunityPage from './pages/SamShamounCommunityPage';
import TateBrothersCommunityPage from './pages/TateBrothersCommunityPage';
import FreshAndFitCommunityPage from './pages/FreshAndFitCommunityPage';
import SiddhanathYogaCommunityPage from './pages/SiddhanathYogaCommunityPage';
import AdminPage from './pages/AdminPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import './styles/App.css';
import './styles/CommunityPage.css';
import './styles/ThreadCard.css';
import './styles/RSSFetcher.css';
import './styles/Auth.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/community/pol" element={<PolCommunityPage />} />
        <Route path="/community/infowars" element={<InfoWarsCommunityPage />} />
        <Route path="/community/thenx" element={<ThenxCommunityPage />} />
        <Route path="/community/sam-shamoun" element={<SamShamounCommunityPage />} />
        <Route path="/community/tate-brothers" element={<TateBrothersCommunityPage />} />
        <Route path="/community/fresh-and-fit" element={<FreshAndFitCommunityPage />} />
        <Route path="/community/siddhanath-yoga" element={<SiddhanathYogaCommunityPage />} />
        <Route path="/community/:slug" element={<CommunityPage />} />
        <Route path="/community/:slug/category/:categorySlug" element={<CategoryPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
