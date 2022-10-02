import React from 'react';
import NoteItemBody from './NoteItemBody';
import PropTypes from 'prop-types';

function NoteItem({ note, onClick, onArchive }) {
  return (
    <div data-aos="zoom-in-up" className="w-full px-4 lg:w-1/2 xl:w-1/3">
      <NoteItemBody {...note} onClick={onClick} onArchive={onArchive} />
    </div>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteItem;