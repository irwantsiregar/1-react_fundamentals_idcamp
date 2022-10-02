import React from 'react';
import PropTypes from 'prop-types';

function Label({ forLabel, children }) {
  return (
    <label htmlFor={forLabel} className="text-base md:text-lg font-bold text-primary" > {children}</label >
  )
}

Label.propTypes = {
  forLabel: PropTypes.string,
  children: PropTypes.string
};

export default Label;