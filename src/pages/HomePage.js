import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { deleteNote, archiveNote, getActiveNotes } from '../utils/network-data';
import showFormattedDate from '../utils/formatted-date';
import Swal from 'sweetalert2';
import NotesSection from '../components/main/NotesSection';
import Context from '../contexts/Context';

function HomePage() {
  const [loading, setLoading] = React.useState(true);
  const { locale } = React.useContext(Context);

  const [notes, setNotes] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
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

  const onDeleteHandler = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
      .then((result) => {
        if (result.isConfirmed) {
          (async () => {
            const { error, data } = await deleteNote(id);
            if (error === false && data === undefined) {
              const { data } = await getActiveNotes();
              setNotes(data);
              Swal.fire({
                title: 'Deleted!',
                text: 'Your note have been deleted.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000
              });
            }
          })();
        }
      });
  }

  async function onArchiveNoteHandler(id) {
    const { error, data } = await archiveNote(id);
    if (error === false && data === undefined) {
      const { data } = await getActiveNotes();
      setNotes(data);
      Swal.fire({
        position: 'center',
        title: 'Archived',
        text: 'Your note have been archived.',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000
      });
    }
  }

  const filteredNotes = notes.map((note) => ({...note, createdAt: showFormattedDate(note.createdAt)}))
    .filter((note) => (note.title.toLowerCase().includes(keyword.toLowerCase())))
    .sort().reverse();

  return (
    <NotesSection label={locale === 'id' ? 'Catatan' : 'Notes'} loading={loading} notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onArchiveNoteHandler} keyword={keyword} keywordChange={onKeywordChangeHandler} message={locale === 'id' ? keyword || 'Catatan' : keyword || 'Notes'} />
  )
}


export default HomePage;