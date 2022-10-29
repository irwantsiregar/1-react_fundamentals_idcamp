import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import NoteList from './NoteList';
import TitleSectionPage from './TitleSectionPage';
import { Loadings } from './Loading';

function NotesSection({ label, loading, notes, onDelete, onArchive, keyword, keywordChange, message }) {
  return (
    <section id="notes" className="pb-14 md:pb-24">
      <div className="container pt-14">
        <div id="notes" className="w-full border-t border-slate-200 dark:border-dark">
          <SearchInput keyword={keyword} keywordChange={keywordChange} />
          <div className="w-full">
            <TitleSectionPage label={label} />
            {
              loading ?
                <Loadings /> :
                <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive} message={message} />
            }
          </div>
        </div>
      </div>
    </section>
  )
}

NotesSection.propTypes = {
  label: PropTypes.string,
  notes: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  keyword: PropTypes.string,
  keywordChange: PropTypes.func,
  message: PropTypes.string,
};

export default NotesSection;