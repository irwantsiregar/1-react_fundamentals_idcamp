import React from 'react';
import { addNote } from '../utils/network-data';
import FormSection from '../components/main/FormSection';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    const { error, data } = await addNote(note);
    if (error === false && data.hasOwnProperty('id')) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your note have been saved',
        showConfirmButton: false,
        timer: 1000
      });

      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  }

  return (
    <FormSection addNote={onAddNoteHandler} />
  )
}

export default AddPage;