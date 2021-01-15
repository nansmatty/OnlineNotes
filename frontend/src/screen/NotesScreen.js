import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listNotes, deleteNotes } from '../actions/noteActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import ContentContainer from '../components/ContentContainer';
import NoteList from '../components/NoteList';
import { Col, Row, Button } from 'react-bootstrap';
import NoteCreate from '../components/NoteCreate';

const NotesScreen = () => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notesList } = noteList;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: createSuccess } = noteCreate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: deleteSuccess,
  } = noteDelete;

  useEffect(() => {
    dispatch(listNotes());
    if (deleteSuccess || createSuccess) {
      dispatch(listNotes());
    }
  }, [dispatch, deleteSuccess, createSuccess]);

  const deleteHandler = (id) => {
    dispatch(deleteNotes(id));
  };

  return (
    <ContentContainer>
      <NoteCreate />

      {/*.............. Note list render.................. */}

      {/* Error and Loading */}

      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingDelete && <Loader />}

      {/* Listing The notes with delete button */}

      {notesList.map((note) => (
        <Row key={note._id}>
          <Col md={10}>
            <NoteList note={note} />
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
