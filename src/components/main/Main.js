import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePageWrapper from '../../pages/HomePage';
import ArchivePageWrapper from '../../pages/ArchivePage';
import AddPage from '../../pages/AddPage';
import EditPage from '../../pages/EditPage';
import DetailPageWrapper from '../../pages/DetailPage';
import PageNotFound from '../../pages/PageNotFound';

function Main() {
  return (
    <main className="min-h-[82vh] md:min-h-[90vh] bg-slate-100 dark:bg-dark">
      <Routes>
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/archived" element={<ArchivePageWrapper />} />
        <Route path="/notes/new" element={<AddPage />} />
        <Route path="/notes/edit/:id" element={<EditPage />} />
        <Route path="/notes/:id" element={<DetailPageWrapper />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  )
}


export default Main;