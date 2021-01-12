import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createNotes } from '../actions/noteActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { NOTE_CREATE_RESET } from '../constants/noteConstants';

const NoteCreate = () => {
  const dispatch = useDispatch();

  const [note, setNote] = useState('');
  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error, success } = noteCreate;

  useEffect(() => {
    if (success) {
      dispatch({ type: NOTE_CREATE_RESET });
    }
  }, [dispatch, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNotes({ note }));
    setNote('');
  };

  return (
    <div
      className='bg-primary text-white text-bold'
      style={{ borderRadius: '20px' }}>
      <Form
        onSubmit={submitHandler}
        style={{ padding: '50px', margin: '20px 0px' }}>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Row>
          <Col xs md={9}>
            <Form.Control
              type='text'
              className='my-2'
              placeholder='Create Your Note...'
              value={note}
              onChange={(e) => setNote(e.target.value)}></Form.Control>
          </Col>
          <Col>
            <Button
              type='submit'
              className='btn btn-block btn-secondary text-primary mt-2'
              style={{ padding: '7px 0px' }}>
              Create
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default NoteCreate;
