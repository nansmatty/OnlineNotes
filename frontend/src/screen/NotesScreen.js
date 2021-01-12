import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listNotes, deleteNotes } from '../actions/noteActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import ContentContainer from '../components/ContentContainer';
import NoteCreate from '../components/NoteCreate';
import NoteList from '../components/NoteList';
import { Col, Row, Button } from 'react-bootstrap';

const NotesScreen = () => {
  const dispatch = useDispatch();

  const [noteListArray, setNoteListArray] = useState([]);

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;

  const noteDelete = useSelector((state) => state.noteDelete);
  const { loading: loadingDelete, error: errorDelete } = noteDelete;

  useEffect(() => {
    dispatch(listNotes());
  }, [dispatch]);

  const deleteHandler = (id) => {
    dispatch(deleteNotes(id));
  };

  return (
    <ContentContainer>
      <NoteCreate />
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingDelete && <Loader />}
      {notes.map((note) => (
        <Row>
          <Col md={10}>
            <NoteList key={note._id} note={note} />
          </Col>
          <Col>
            <Button
              variant='danger'
              className='btn-md py-2 mt-1'
              onClick={() => deleteHandler(note._id)}
              style={{ borderRadius: '5px' }}>
              <i className='fas fa-trash'></i>
            </Button>
          </Col>
        </Row>
      ))}
    </ContentContainer>
  );
};

export default NotesScreen;
