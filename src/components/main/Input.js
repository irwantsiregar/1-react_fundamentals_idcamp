import React from 'react';
import PropTypes from 'prop-types';

function Input({ title, onChange, placeHolder, color }) {
  return (
    <input type="text" id="title" name="title" value={title} onChange={onChange} placeholder={placeHolder} className={`w-full ${color} bg-slate-200 dark:bg-slate-400 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary dark:placeholder:text-slate-300`} required />
  )
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  color: PropTypes.string
};


export default Input;