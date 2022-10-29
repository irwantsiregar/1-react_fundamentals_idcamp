import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePageWrapper from '../../pages/HomePage';
import ArchivePageWrapper from '../../pages/ArchivePage';
import AddPage from '../../pages/AddPage';
import DetailPage from '../../pages/DetailPage';
import PageNotFound from '../../pages/PageNotFound';

function Main({ hamburger }) {
  return (
    <main onClick={hamburger} className="min-h-[82vh] md:min-h-[90vh] bg-slate-100 dark:bg-dark">
      <Routes>
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/archived" element={<ArchivePageWrapper />} />
        <Route path="/notes/new" element={<AddPage />} />
        <Route path="/notes/:id" element={<DetailPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </main>
  )
}

Main.propTypes = {
  hamburger: PropTypes.func.isRequired,
};


export default Main;