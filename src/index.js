import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NotesApp from './components/NotesApp';
import './assets/styles/index.css';
import './assets/js/script';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ once: true, duration: 1500 });
library.add(fas);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NotesApp />
    </BrowserRouter>
  </React.StrictMode>
);

