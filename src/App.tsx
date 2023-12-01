import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<h1>Homepage</h1>} />
          <Route path="portfolio" element={<h1>Portfolio</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
