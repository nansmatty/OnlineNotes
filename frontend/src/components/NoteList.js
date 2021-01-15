import React, { Fragment } from 'react';
import { Alert } from 'react-bootstrap';

const NoteList = ({ note: { note } }) => {
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
