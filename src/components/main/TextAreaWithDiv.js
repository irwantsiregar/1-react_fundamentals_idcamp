import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';

function TextAreaWithDiv({ body, onChange }) {
  return (
    <div id="body" name="body" value={parser(body)} onInput={onChange} className="h-48 p-3 bg-slate-200 dark:bg-slate-400 text-dark rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary dark:placeholder:text-slate-300" data-placeholder="Sebenarnya saya adalah ...." contentEditable />
  )
}

TextAreaWithDiv.propTypes = {
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}


export default TextAreaWithDiv;