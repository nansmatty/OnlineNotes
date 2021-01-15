import React, { useEffect } from 'react';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Redirect } from 'react-router-dom';

const MainScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      <Redirect to='/notes' />;
    }
  }, [userInfo]);

  return (
    <Jumbotron className='bg-primary' style={{ height: '70vh' }}>
      <Row className='justify-content-md-center'>
        <Col md={6} className='p-3 m-3'>
          <h1 className='text-white text-center display-3'>Online Notes</h1>
          <p className='text-white text-center'>
            Create your daily life notes so won't forgot. Your notes with you
            wherever you go. Easy to use, protects all your notes!
          </p>
          <br />
          <LinkContainer to='/register'>
            <Button
              type='button'
              className='btn btn-block btn-secondary text-primary'>
              Sign up-It's free
            </Button>
          </LinkContainer>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default MainScreen;
