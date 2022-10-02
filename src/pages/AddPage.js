import React from 'react';
import { addNote } from '../utils/local-data';
import FormSection from '../components/main/FormSection';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate('/');
  }

  return (
    <FormSection addNote={onAddNoteHandler} />
  )
}

export default AddPage;