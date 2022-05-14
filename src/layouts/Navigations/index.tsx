import './style.css';
import valorantLogo from '@images/valorant-logo.jpg';
import React from 'react';
import { Link } from 'react-router-dom';

import useNavigations from './hook';

const Navigations: React.FC = () => {
  const { navigations } = useNavigations();

  return (
    <nav>
      <div className="logo-container">
        <img
          className="w-[60px] h-[60px] object-cover"
          src={valorantLogo}
          alt="valorant logo"
        />
      </div>
      <div className="links">
        {navigations.map(nav => (
          <Link to={nav.link} key={nav.link}>
            <span className="link">
              {nav.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navigations;