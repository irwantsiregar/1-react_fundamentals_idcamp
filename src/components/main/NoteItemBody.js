import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash, FiArchive, FiBook } from 'react-icons/fi';
import Button from './Button';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';

function NoteItemBody({ title, body, createdAt, archived, id, onDelete, onArchive }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-700">
      <div className="relative py-8 px-6 max-h-72 text-ellipsis overflow-hidden ...">
        <h3>
          <Link to={`/notes/${id}`} className="block font-semibold text-xl text-dark hover:text-primary truncate dark:text-slate-200 dark:hover:text-primary">{title}</Link>
        </h3>
        <p className="font-medium text-[12px] md:text-[13px] text-sky-800 mb-3 mt-1 dark:text-slate-400">{createdAt}</p>
        <p className="font-medium text-base text-secondary capitalize break-words mb-6 text-justify dark:text-slate-300">{parser(body)}</p>
        {
          !archived ?
            <div className="absolute z-10 bottom-4 w-[85%] flex justify-end">
              <Button className="rounded-lg py-2 bg-slate-100 mx-1 dark:bg-dark outline outline-none outline-1 hover:outline-red-600" id={id} onClick={onDelete}><FiTrash className="text-red-600 text-xl mx-3 hover:opacity-70" /></Button>
              <Button className="rounded-lg py-2 bg-slate-100 mx-1 dark:bg-dark outline outline-none outline-1 hover:outline-primary" id={id} onClick={onArchive}><FiArchive className="text-primary text-xl mx-3 hover:opacity-70" /></Button>
            </div>
            :
            <div className="absolute z-10 bottom-4 w-[85%] flex justify-end">
              <Button className="rounded-lg py-2 bg-slate-100 dark:bg-dark outline outline-none outline-1 hover:outline-yellow-600" id={id} onClick={onArchive}><FiBook className="text-yellow-500 text-xl mx-3 hover:opacity-70" /></Button>
            </div>
        }
      </div>
    </div>
  );
}

NoteItemBody.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired
};

export default NoteItemBody;