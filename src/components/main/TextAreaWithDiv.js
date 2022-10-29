import React from 'react';
import PropTypes from 'prop-types';

function TextAreaWithDiv({ body, onChange, placeHolder }) {
  return (
    <div id="body" name="body" value={body} onInput={onChange} className="h-48 p-3 bg-slate-200 dark:bg-slate-400 text-dark  placeholder:text-slate-300 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary dark:placeholder:text-slate-300" placeholder={placeHolder} contentEditable />
  )
}

TextAreaWithDiv.propTypes = {
  body: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}


export default TextAreaWithDiv;