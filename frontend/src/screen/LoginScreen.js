import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Jumbotron } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import ContentContainer from '../components/ContentContainer';

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push('/notes');
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password, rememberMe));
  };

  return (
    <ContentContainer>
      <Jumbotron
        className='bg-primary text-white text-bold'
        style={{ height: '70vh' }}>
        <h1 className='pb-3'>Login</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId='rememberme'>
            <Form.Check
              type='checkbox'
              label='Remember Me'
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}></Form.Check>
          </Form.Group>

          <Button
            type='submit'
            className='btn btn-block btn-secondary text-primary'>
            Sign In
          </Button>
        </Form>

        <Row className='py-3'>
          <Col>
            New Customer?{' '}
            <Link to='/register' className='text-white'>
              Register
            </Link>
          </Col>
        </Row>
      </Jumbotron>
    </ContentContainer>
  );
};

export default LoginScreen;
