import React from 'react';

import Header from '@layouts/Header';
import AgentsIntro from './AgentsIntro';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <AgentsIntro />
    </div>
  );
}

export default Home;