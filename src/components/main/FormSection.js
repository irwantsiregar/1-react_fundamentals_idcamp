import React from 'react';
import FormInput from './FormInput';
import TitleSectionPage from './TitleSectionPage';
import PropTypes from 'prop-types';

function FormSection({ addNote, getNoteId }) {
  return (
    <section id="form" className="pt-14 pb-8 md:pt-28 bg-slate-100 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4 mt-6 text-center">
          <TitleSectionPage label="Let's Take Notes" />
          <p data-aos="zoom-in" className="font-medium text-md text-secondary">Please write a note that you think is very
            important.</p>
        </div>
        <FormInput addNote={addNote} editNote={getNoteId} />
      </div>
    </section>
  )
}

FormSection.propTypes = {
  addNote: PropTypes.func,
  getNoteId: PropTypes.object,
};

export default FormSection;