import React from 'react';
import PropTypes from 'prop-types';

function DarkToggle({ darkToggle }) {
  return (
    <div className="flex">
      <span className="mr-2 text-sm text-slate-400">Light</span>
      <input type="checkbox" className="hidden" id="dark-toggle" onClick={darkToggle} />
      <label htmlFor="dark-toggle">
        <div
          className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-400 dark:bg-slate-200 p-1">
          <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out dark:bg-teal-700">
          </div>
        </div>
      </label>
      <span className="ml-2 text-sm text-slate-600">Dark</span>
    </div>
  )
}

DarkToggle.propTypes = {
  darkToggle: PropTypes.func.isRequired
}

export default DarkToggle;