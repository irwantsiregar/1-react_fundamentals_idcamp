import React from 'react';
import autoBindReact from 'auto-bind/react';
import PropTypes from 'prop-types';
import Label from './Label';
import Input from './Input';
import Button from './Button';
import TextAreaWithDiv from './TextAreaWithDiv';
import { FiSave } from 'react-icons/fi';

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getNote();
    autoBindReact(this);
  }

  getNote() {
    const editNote = this.props.editNote;
    return (editNote === undefined || editNote.note === undefined) ?
      { title: '', body: '', count: 50, } :
      { title: editNote.note.title || '', body: editNote.note.body || '', count: 50 - editNote.note.title.length || 50 }
  }

  handleChange(event) {
    const value = event.target.value;
    const key = event.target.name;
    const maxCount = 50;

    this.setState((prevState) => {
      return (key === 'title' && value.length <= maxCount) ?
        { ...prevState, [key]: value, count: maxCount - value.length } :
        { ...prevState, body: event.target.innerHTML }
    });
  }


  onSubmitEventHandler(event) {
    event.preventDefault();
    const editNote = this.props.editNote;
    (editNote !== undefined) ?
      editNote.edit({ id: editNote.note.id, title: this.state.title, body: this.state.body }) : this.props.addNote(this.state);
  }

  render() {
    const { count } = this.state;
    return (
      <form data-aos="fade-down" action="" onSubmit={this.onSubmitEventHandler}>
        <div className="w-full lg:w-2/3 mx-auto">
          <div className="w-full px-4 pt-5 text-right">
            <p className="text-slate-500 text-[14px] dark:text-slate-400">Remaining Characters: {(count) ?
              <span> {count}</span> : <span style={{ color: 'red', fontWeight: 'bold' }}> {count}</span>}</p>
          </div>
          <div className="w-full px-4 mb-8">
            <Label forLabel="title">Title</Label>
            <Input title={this.state.title} onChange={this.handleChange} placeHolder="Title" />
          </div>
          <div className="w-full px-4 mb-8">
            <Label forLabel="body">Body</Label>
            <TextAreaWithDiv body={this.state.body} onChange={this.handleChange} />
          </div>
          <div className="w-full flex justify-end px-4">
            <Button submit="submit" className="text-base w-[50%] lg:w-44 md:w-64 font-semibold text-white bg-primary dark:bg-teal-700 py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-500"><FiSave className="text-3xl md:text-4xl text-slate-100 mx-auto hover:opacity-75" /></Button>
          </div>
        </div>
      </form>
    )
  }
}

FormInput.propTypes = {
  addNote: PropTypes.func,
  editNote: PropTypes.object,
};

export default FormInput;