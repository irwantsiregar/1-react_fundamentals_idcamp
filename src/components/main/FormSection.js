import React from 'react';
import FormInput from './FormInput';
import PropTypes from 'prop-types';
import Context from '../../contexts/Context';
import TitleSectionPage from './TitleSectionPage';

function FormSection({ addNote }) {
  const { locale } = React.useContext(Context);

  return (
    <section id="form" className="pt-14 pb-8 md:pt-28 bg-slate-100 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4 mt-6 text-center">
          <TitleSectionPage label={locale === 'id' ? 'Ayo membuat catatan' : `Let's take notes`} />
          <p data-aos="zoom-in" className="font-medium text-md text-secondary">{locale === 'id' ? 'Silakan menulis catatan yang menurut Anda sangat penting.' : 'Please write a note that you think is very important.'}</p>
        </div>
        <FormInput addNote={addNote} />
      </div>
    </section>
  )
}

FormSection.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default FormSection;