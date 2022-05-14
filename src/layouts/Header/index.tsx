import React from 'react';

import Wrapper from '@layouts/Wrapper';
import Navigations from '@layouts/Navigations';

const Header: React.FC = () => {
  return (
    <header>
      <Wrapper>
        <Navigations />
      </Wrapper>
    </header>
  );
}

export default Header;