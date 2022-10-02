import React from 'react';
import { getNote, editNote } from '../utils/local-data';
import FormSection from '../components/main/FormSection';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function EditPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const note = getNote(id);

  function onEditNoteHandler(note) {
    editNote(note);
    navigate('/');
  }

  return (
    <FormSection getNoteId={{ note, edit: onEditNoteHandler }} />
  )
}

export default EditPage;