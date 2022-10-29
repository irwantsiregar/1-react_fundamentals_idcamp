import React from 'react';
import NoteItemBody from './NoteItemBody';
import PropTypes from 'prop-types';

function NoteItem({ note, onDelete, onArchive }) {
  return (
    <div data-aos="zoom-in-up" className="w-full px-4 lg:w-1/2 xl:w-1/3">
      <NoteItemBody {...note} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteItem;