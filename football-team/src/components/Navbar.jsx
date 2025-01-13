import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/matches">Matches</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/news">News</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
