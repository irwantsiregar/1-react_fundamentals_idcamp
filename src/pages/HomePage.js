import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { deleteNote, archiveNote, getAllNotes, showFormattedDate } from '../utils/local-data';
import autoBindReact from 'auto-bind/react';
import NotesSection from '../components/main/NotesSection';
import PropTypes from 'prop-types';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || '',
    }

    autoBindReact(this);
  }

  onKeywordChangeHandler(event) {
    const keyword = event.target.value;
    this.onSetState({ keyword });
    this.props.keywordChange(keyword);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.onSetState({ notes: getAllNotes() });
  }

  onArchiveNoteHandler(id) {
    archiveNote(id);
    this.onSetState({ notes: getAllNotes() });
  }

  onSetState(objectState) {
    this.setState(() => {
      return objectState;
    });
  }

  render() {
    const notes = this.state.notes.map((note) => ({ ...note, createdAt: showFormattedDate(note.createdAt) }))
      .filter((note) => (note.title.toLowerCase().includes(this.state.keyword.toLowerCase()))).sort().reverse();
    const keyword = this.state.keyword;
    return (
      <NotesSection label="Notes" notes={notes} onClick={this.onDeleteHandler} onArchive={this.onArchiveNoteHandler} keyword={keyword} keywordChange={this.onKeywordChangeHandler} message={keyword || 'Notes'} />
    )
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func
}

export default HomePageWrapper;