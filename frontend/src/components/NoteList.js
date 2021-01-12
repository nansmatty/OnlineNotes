import React, { Fragment } from 'react';
import { Alert, Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNotes } from '../actions/noteActions';

const NoteList = ({ note: { _id, note } }) => {
  return (
    <Fragment>
      <Alert
        variant='primary'
        className='bg-primary text-white text-bold corner-rounded'>
        {note}
      </Alert>
    </Fragment>
  );
};

export default NoteList;
