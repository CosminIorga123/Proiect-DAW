import React from 'react';
import Navbar from './Navbar';
import liverpoolLogo from '../images/carousel/liverpool-logo.png';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={liverpoolLogo} alt="Liverpool Logo" className="logo" />
        <div className="header-text">
          <h1>You'll Never Walk Alone</h1>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
