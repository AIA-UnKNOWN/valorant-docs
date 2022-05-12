import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/agents">Agents</Link>
      <hr/>
      <Link to="/weapons">Weapons</Link>
      <hr/>
      <Link to="/maps">Maps</Link>
    </div>
  );
}

export default Home;