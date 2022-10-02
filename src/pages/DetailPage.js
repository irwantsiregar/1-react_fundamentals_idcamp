import React from 'react';
import NoteDetail from '../components/main/NoteDetail';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={String(id)} />
}


class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id)
    };
  }

  render() {
    return (
      <section>
        <NoteDetail {...this.state.note} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
}


export default DetailPageWrapper;
