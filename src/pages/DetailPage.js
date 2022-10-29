import React from 'react';
import NoteDetail from '../components/main/NoteDetail';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/network-data';
import showFormattedDate from '../utils/formatted-date';

function DetailPage() {
  const [loading, setLoading] = React.useState(true);
  const [note, setNote] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setLoading(false);
    });

    return () => {
      setLoading(true);
    };
  }, [id]);


  return (
    <section>
      <NoteDetail title={note.title} body={note.body} createdAt={showFormattedDate(note.createdAt)} loading={loading} />
    </section>
  );
}


export default DetailPage;
