import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Jumbotron } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import ContentContainer from '../components/ContentContainer';

const RegisterScreen = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push('/notes');
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Password do not match');
    } else {
      dispatch(register(name, email, password, rememberMe));
    }
  };

  return (
    <ContentContainer>
      <Jumbotron className='bg-primary text-white text-bold'>
        <h1 className='pb-3'>Register</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}></Form.Control>
          </Form.Group>

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

          <Form.Group controlId='confirmpassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }></Form.Control>
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
            Register
          </Button>
        </Form>

        <Row className='py-3'>
          <Col>
            Already have an account?{' '}
            <Link to='/login' className='text-white'>
              Login
            </Link>
          </Col>
        </Row>
      </Jumbotron>
    </ContentContainer>
  );
};

export default RegisterScreen;
