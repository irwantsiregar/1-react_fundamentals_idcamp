import React from 'react';
import PropTypes from 'prop-types';

function TitleSectionPage({ label }) {
  return (
    <div className="max-w-xl mx-auto text-center mb-6 pb-4 border-b border-slate-200 dark:border-slate-600">
      <h2 data-aos="fade-down" className="font-semibold text-dark text-2xl sm:text-4xl lg:text-5xl dark:text-slate-200">{label}</h2>
    </div>
  )
}

TitleSectionPage.propTypes = {
  label: PropTypes.string,
}

export default TitleSectionPage;