import React from 'react';

import Header from '@layouts/Header';
import AgentsIntro from './AgentsIntro';
import WeaponsIntro from './WeaponsIntro';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <AgentsIntro />
      <WeaponsIntro />
    </div>
  );
}

export default Home;