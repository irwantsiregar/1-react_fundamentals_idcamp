import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';
import Announcement from './Announcement';

function NoteList({ notes, onClick, onArchive, message }) {
  return (
    <div className="flex flex-wrap">
      {

        notes.length ? notes.map((note) =>
          <NoteItem
            key={note.id}
            note={note}
            onClick={onClick}
            onArchive={onArchive}
          />
        ) :
          <Announcement message={message} />
      }
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array,
  message: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired
};

export default NoteList;