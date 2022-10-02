import React from 'react';
import PropTypes from 'prop-types';

function Button({ submit, id, className, children, onClick }) {
  return (
    submit ?
      <button type={submit} className={className}>{children}</button> :
      <button className={className} onClick={() => onClick(id)}>{children}</button>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  children: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string,
  submit: PropTypes.string
};

export default Button;