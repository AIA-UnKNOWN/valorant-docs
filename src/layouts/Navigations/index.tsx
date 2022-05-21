import './style.css';
import valorantLogo from '@images/valorant-logo.jpg';
import React from 'react';
import { Link } from 'react-router-dom';

import useNavigations from './hook';
import NavToggler from './NavToggler';
import NavLinks from './NavLinks';

const Navigations: React.FC = () => {
  const { navigations } = useNavigations();

  return (
    <nav className="flex justify-between items-center relative">
      <Link to="/">
        <img
          className="w-[60px] h-[60px] object-cover"
          src={valorantLogo}
          alt="valorant logo"
        />
      </Link>
      <NavToggler />
      <NavLinks
        navigations={navigations}
      />
    </nav>
  );
}

export default Navigations;