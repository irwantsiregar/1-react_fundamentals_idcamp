import React from 'react';
import PropTypes from 'prop-types';
import { FaMoon, FaSun } from 'react-icons/fa';

function DarkToggle({ theme, toggleTheme }) {
  return (
    <div>
      <button onClick={toggleTheme}>{theme === 'light' ? <FaMoon className="text-2xl text-slate-600" /> : <FaSun className="text-2xl text-white" />}</button>
    </div>
  )
}

DarkToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired
}

export default DarkToggle;