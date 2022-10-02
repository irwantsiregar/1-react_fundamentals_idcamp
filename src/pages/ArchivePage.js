import React from 'react';
import { unarchiveNote, getArchivedNotes } from '../utils/local-data';
import autoBindReact from 'auto-bind/react';
import NotesSection from '../components/main/NotesSection';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';


function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      archivedNotes: getArchivedNotes(),
      keyword: props.defaultKeyword || '',
    }

    autoBindReact(this);
  }

  onKeywordChangeHandler(event) {
    const keyword = event.target.value;
    this.onSetState({ keyword });
    this.props.keywordChange(keyword);
  }

  onDeleteArchiveHandler(id) {
    unarchiveNote(id);
    this.setState({ archivedNotes: getArchivedNotes() });
  }

  onUnarchiveNoteHandler(id) {
    unarchiveNote(id);
    this.onSetState({ archivedNotes: getArchivedNotes() });
  }

  onSetState(objectState) {
    this.setState(() => {
      return objectState;
    });
  }

  render() {
    const archivedNotes = this.state.archivedNotes.filter((archivedNote) => {
      return archivedNote.title.toLowerCase().includes(this.state.keyword.toLowerCase());
    });
    const keyword = this.state.keyword;

    return (
      <NotesSection label="Archive" notes={archivedNotes} onClick={this.onDeleteArchiveHandler} onArchive={this.onUnarchiveNoteHandler} keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} message={keyword || 'Archive'} />
    )
  }
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func
}

export default ArchivePageWrapper;