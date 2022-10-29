import React from 'react';
import PropTypes from 'prop-types';
import Context from '../../contexts/Context';

function Announcement({ message }) {
  const { locale } = React.useContext(Context);
  return (
    <div data-aos="zoom-in-right" className="w-full px-4 mt-10 md:w-96 lg:w-1/2 mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden py-3 px-6 mb-10 dark:bg-slate-700">
        <p className="font-medium text-base md:text-xl text-cyan-800 dark:text-slate-300">{locale === 'id' ? `${message} tidak tersedia !` : `${message} not available !`}</p>
      </div>
    </div>
  )
}

Announcement.propTypes = {
  message: PropTypes.string,
};


export default Announcement;