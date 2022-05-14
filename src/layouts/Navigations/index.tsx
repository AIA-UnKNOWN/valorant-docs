import valorantLogo from '@images/valorant-logo.jpg';
import React from 'react';
import { Link } from 'react-router-dom';

import useNavigations from './hook';

const Navigations: React.FC = () => {
  const { navigations } = useNavigations();

  return (
    <nav className="flex justify-between items-center">
      <Link to="/">
        <img
          className="w-[60px] h-[60px] object-cover"
          src={valorantLogo}
          alt="valorant logo"
        />
      </Link>
      <div className="py-[40px]">
        {navigations.map(nav => (
          <Link to={nav.link} key={nav.link}>
            <span
              className="relative text-[16px] text-white ml-10
              hover:before:w-full
              before:absolute before:-bottom-2 before:content-[''] before:inline-block before:h-[2px]
              before:bg-red before:w-0 before:transition-all before:duration-300"
            >
              {nav.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navigations;