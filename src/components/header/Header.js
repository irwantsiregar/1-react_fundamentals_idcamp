import React from 'react';
import Brand from './Brand';
import Hamburger from './Hamburger';
import NavMenu from './NavMenu';

function Header() {
  function hamburgerClick() {
    // Hamburger
    document.querySelector('#hamburger').classList.toggle('hamburger-active');
    document.querySelector('#nav-menu').classList.toggle('hidden');
  }

  function darkToggleClick() {
    // Darkmode Toggle
    const darkToggle = document.querySelector('#dark-toggle');
    const html = document.querySelector('html');
    if (darkToggle.checked) {
      html.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      html.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }

  return (
    <header id="header" className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <Brand />
          <div className="flex items-center px-4">
            <Hamburger hamburger={hamburgerClick} />
            <NavMenu dark={darkToggleClick} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;