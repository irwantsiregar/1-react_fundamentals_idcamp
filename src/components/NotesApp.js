import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';


function NotesApp() {
  function hamburgerMenu(e){
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    if (e.target !== hamburger && e.target !== navMenu) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
    }
  }

  return (
    <>
      <Header hamburger={hamburgerMenu} />
      <Main hamburger={hamburgerMenu} />
      <Footer hamburger={hamburgerMenu} />
    </>
  );
}

export default NotesApp;
