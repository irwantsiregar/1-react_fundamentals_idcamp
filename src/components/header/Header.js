import React from 'react';
import PropTypes from 'prop-types';
import Brand from './Brand';
import Hamburger from './Hamburger';
import NavMenu from './NavMenu';

function Header({ logout, name }) {
  function hamburgerClick() {
    // Hamburger
    document.querySelector('#hamburger').classList.toggle('hamburger-active');
    document.querySelector('#nav-menu').classList.toggle('hidden');
  }

  return (
    <header id="header" className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <Brand />
          <div className="flex items-center px-4">
            <Hamburger hamburger={hamburgerClick} />
            <NavMenu logout={logout} name={name} />
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}
export default Header;