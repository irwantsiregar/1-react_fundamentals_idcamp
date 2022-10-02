import React from 'react';
import PropTypes from 'prop-types';

function Hamburger({ hamburger }) {
  return (
    <button id="hamburger" onClick={hamburger} name="hamburger" type="button" className="block absolute right-4 lg:hidden">
      <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
      <span className="hamburger-line transition duration-300 ease-in-out"></span>
      <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
    </button>
  )
}

Hamburger.propTypes = {
  hamburger: PropTypes.func.isRequired
}

export default Hamburger;