import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import NowPlayingPage from './pages/NowPlayingPage';
import UpcomingPage from './pages/UpcomingPage';
import SearchPageWrapper from './pages/SearchPage';
import DetailPageWrapper from './pages/DetailPage';

function App() {
  return (
    <>
      <header>
        <h1>Movie Catalogue</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/now-playing" element={<NowPlayingPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/search" element={<SearchPageWrapper />} />
          <Route path="/movies/:id" element={<DetailPageWrapper />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
