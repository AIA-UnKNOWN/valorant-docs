import valorantBg from '@images/valorant-background.jpg';
import React from 'react';

import Wrapper from '@layouts/Wrapper';
import Navigations from '@layouts/Navigations';

const Header: React.FC = () => {
  return (
    <header className="relative h-screen">
      <img
        className="w-full h-full object-cover overflow-y-hidden absolute -z-10"
        src={valorantBg}
        alt="Valorant Background"
      />
      <Wrapper>
        <Navigations />
      </Wrapper>
    </header>
  );
}

export default Header;