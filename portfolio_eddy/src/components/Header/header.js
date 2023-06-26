import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">A propos</Link></li>
          <li><Link to="/projects">Projets</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
