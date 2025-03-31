import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">Imageboard Hub</a>
      <div className="nav-links">
        <a href="/login" className="nav-link">Login</a>
        <a href="/register" className="nav-link">Register</a>
      </div>
    </header>
  );
};

export default Header;
