import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import Input from './Input';
import Button from './Button';
import TextAreaWithDiv from './TextAreaWithDiv';
import { FiSave } from 'react-icons/fi';
import useInput from '../../hooks/useInput';
import Context from '../../contexts/Context';

function FormInput({ addNote }) {
  const [title, handleInputTitle] = useInput('');
  const [body, setInputBody] = React.useState('');
  const [count, setCountCharacter] = React.useState(50);
  const { locale } = React.useContext(Context);
  const language = locale === 'id';

  const handleInputChange = (event) => {
    const maxCount = 50;
    const key = event.target.name;
    const value = event.target.value;
    if (key === 'title' && value.length <= maxCount) {
      handleInputTitle(event);
      setCountCharacter(maxCount - value.length);
      return;
    }
    setInputBody(event.target.innerHTML);
  }

  const validateInputHandler = () => {
    if (title.trim() !== '' && body.trim() !== '') {
      document.querySelector('.warning-input').style.display = 'none';
      return true;
    }
    document.querySelector('.warning-input').style.display = 'block';
  }

  const onSubmitEventHandler = async (event) => {
    event.preventDefault();
    const validate = validateInputHandler();
    if (validate) {
      await addNote({ title, body });
    }
  }

  return (
    <form data-aos="fade-down" action="" onSubmit={onSubmitEventHandler}>
      <div className="w-full lg:w-2/3 mx-auto">
        <div className="w-full px-4 pt-5 text-right">
          <p className="text-slate-500 text-[14px] dark:text-slate-400">
            {
              language ? 'Karakter tersisa' : 'Remaining characters'} :
            {(count) ?
              <span> {count}</span> : <span style={{ color: 'red', fontWeight: 'bold' }}> {count}</span>}</p>
        </div>
        <div className="warning-input mx-4 px-4 mb-3 py-2 mt-2 border border-yellow-500 hover:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 rounded">
          {
            language ?
              <p className="text-base text-yellow-500 hover:text-yellow-400">{title ? `Catatan harus diisi. Tidak boleh kosong !` : `Judul harus diisi. Tidak boleh kosong !`}</p> :
              <p className="text-base text-yellow-500 hover:text-yellow-400">{title ? `Body is required. Can not be empty !` : `Title is required. Can not be empty !`}</p>
          }
        </div>
        <div className="w-full px-4 mb-8">
          <Label forLabel="title">{language ? 'Judul' : 'Title'}</Label>
          <Input title={title} onChange={handleInputChange} placeHolder={language ? 'Fundamental React' : 'React Fundamentals'} />
        </div>
        <div className="w-full px-4 mb-8">
          <Label forLabel="body">{language ? 'Catatan' : 'Body'}</Label>
          <TextAreaWithDiv body={body} onChange={handleInputChange} placeHolder={language ? 'Belajar React...' : 'Learn React...'} />
        </div>
        <div className="w-full flex justify-end px-4">
          <Button submit="submit" className="text-base w-[50%] lg:w-44 md:w-64 font-semibold text-white bg-primary dark:bg-teal-700 py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-500"><FiSave className="text-3xl md:text-4xl text-slate-100 mx-auto hover:opacity-75" /></Button>
        </div>
      </div>
    </form>
  )
}

FormInput.propTypes = {
  addNote: PropTypes.func,
};

export default FormInput;