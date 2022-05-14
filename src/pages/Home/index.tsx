import React from 'react';
import { Link } from 'react-router-dom';

import Navigations from '@layouts/Navigations';

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <Navigations />
      </header>
    </div>
  );
}

export default Home;