import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { Loading } from './Loading';
import PropTypes from 'prop-types';


function NoteDetail({ title, body, createdAt, loading }) {
  if (loading) {
    return (<Loading />)
  }

  return (
    <section id="notes" className="py-14 md:pb-24 bg-slate-100 dark:bg-dark">
      <div className="container">
        <div data-aos="zoom-in-up" id="notes" className="w-full px-5 pb-14 pt-3 md:px-10 md:pb-12 mt-7 md:mt-16 md:w-3/4 md:mx-auto text-slate-600 border border-slate-300 border-dashed rounded-lg shadow-lg bg-white dark:border-slate-500 dark:bg-slate-700">
          <div className="flex justify-end">
            <Link to='' className="right-0 rounded-lg py-2 outline outline-none outline-1 hover:outline-blue-300"><FiEdit className="text-2xl md:text-3xl text-blue-500 mx-3 hover:opacity-70" /></Link>
          </div>
          <h1 className="text-[1.5rem] font-bold dark:text-slate-200">{title}</h1>
          <p className="text-[16px] mb-4 md:mb-6 dark:text-slate-400">{createdAt}</p>
          <p className="text-lg dark:text-slate-300">{body}</p>
        </div>
      </div>
    </section>
  )
}

NoteDetail.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
  body: PropTypes.string,
  loading: PropTypes.bool
};

export default NoteDetail;