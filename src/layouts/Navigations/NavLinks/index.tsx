import React from 'react';
import { Link } from 'react-router-dom';

import type { Navigation } from '@layouts/Navigations/hook';

const NavLinks: React.FC<Array<Navigation>> = ({
  navigations
}) => {
  return (
    <div
      id="nav-links"
      className="hidden lg:block py-[40px] absolute lg:static top-[60px] w-full bg-black
      lg:w-fit lg:bg-transparent"
    >
      {navigations.map((nav: Navigation) => (
        <Link
          to={nav.link}
          key={nav.link}
          className="block text-center py-4 lg:inline-block lg:py-0
          lg:text-left"
        >
          <label
            htmlFor="nav-toggler"
            className="relative text-[16px] text-white lg:ml-10
            hover:before:w-full cursor-pointer
            before:absolute before:-bottom-2 before:content-[''] before:inline-block before:h-[2px]
            before:bg-red before:w-0 before:transition-all before:duration-300"
          >
            {nav.label}
          </label>
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;