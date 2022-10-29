import React from 'react';
import { unarchiveNote, getArchivedNotes } from '../utils/network-data';
import showFormattedDate from '../utils/formatted-date';
import NotesSection from '../components/main/NotesSection';
import Context from '../contexts/Context';
import { useSearchParams } from 'react-router-dom';

function ArchivePage() {
  const [archivedNotes, setArchivedNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });
  const { locale } = React.useContext(Context);

  React.useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setArchivedNotes(data);
      setLoading(false);
    });

    return () => {
      setLoading(true);
    };
  }, []);

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const onUnarchiveNoteHandler = async (id) => {
    await unarchiveNote(id);
    const { data } = await getArchivedNotes();
    setArchivedNotes(data);
  }

  const filteredArchivedNotes = archivedNotes.map((note) => ({ ...note, createdAt: showFormattedDate(note.createdAt) }))
    .filter((note) => (note.title.toLowerCase().includes(keyword.toLowerCase())));

  return (
    <NotesSection label={locale === 'id' ? 'Arsip' : 'Archive'} loading={loading} notes={filteredArchivedNotes} onDelete={() => null} onArchive={onUnarchiveNoteHandler} keyword={keyword} keywordChange={onKeywordChangeHandler} message={locale === 'id' ? keyword || 'Arsip' : keyword || 'Archive'} />
  )
}


export default ArchivePage;