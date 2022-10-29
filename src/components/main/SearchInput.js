import React from 'react';
import PropTypes from 'prop-types';

function SearchInput({ keyword, keywordChange }) {
  return (
    <div data-aos="fade-right" className="w-full ml-auto mt-8 mb-4 md:mb-2 px-4 md:flex md:justify-end">
      <input type="text" id="keyword" name="keyword" value={keyword} onChange={(event) => keywordChange(event.target.value)} placeholder="Search.." className="w-full md:w-44 md:mr-28 md:focus:w-[35%] md:transition-all bg-slate-200 dark:bg-slate-400 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary dark:placeholder:text-slate-300" />
    </div>
  )
}

SearchInput.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired
}

export default SearchInput;