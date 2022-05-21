import React from 'react';
import { FaBars } from 'react-icons/fa';

const NavToggler: React.FC = () => {
  return (
    <>
      <label
        htmlFor="nav-toggler"
        className="lg:hidden text-white text-[20px] cursor-pointer"
      >
        <FaBars />
      </label>
      <input
        className="hidden"
        type="checkbox"
        name="nav-toggler"
        id="nav-toggler"
      />
    </>
  );
}

export default NavToggler;