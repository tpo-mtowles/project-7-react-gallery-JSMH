import React from 'react';
import { Link } from 'react-router-dom';

//Nav bar with clickable links to pre-selected searches

const Nav = () => (
  <div>
  <nav className="main-nav">
    <ul>
      <li><Link to='/flowers'>Flowers</Link></li>
      <li><Link to='/penguins'>Penguins</Link></li>
      <li><Link to='/sports'>Sports</Link></li>
      <li><Link to='/roads'>Roads</Link></li>
    </ul>
  </nav>
  <h5><Link to='/'>Return Home</Link></h5>
  </div>
);

export default Nav;
