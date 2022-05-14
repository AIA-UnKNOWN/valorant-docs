import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Agents from '@pages/Agents';
import Weapons from '@pages/Weapons';
import Maps from '@pages/Maps';

const container = document.querySelector('#root');
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="agents" element={<Agents />} />
      <Route path="weapons" element={<Weapons />} />
      <Route path="maps" element={<Maps />} />
    </Routes>
  </BrowserRouter>
);