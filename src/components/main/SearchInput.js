import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

function SearchInput({ keyword, keywordChange }) {
  return (
    <div data-aos="fade-right" className="w-full ml-auto mt-8 mb-4 md:mb-2 px-4 md:flex md:justify-end">
      <Input title={keyword} onChange={keywordChange} placeHolder="Search.." color="md:w-44 md:mr-28 md:focus:w-[35%] md:transition-all" />
    </div>
  )
}

SearchInput.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired
}

export default SearchInput;