import React from 'react';

import Header from '@layouts/Header';
import AgentsIntro from './AgentsIntro';
import WeaponsIntro from './WeaponsIntro';
import MapsIntro from './MapsIntro';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <AgentsIntro />
      <WeaponsIntro />
      <MapsIntro />
    </div>
  );
}

export default Home;