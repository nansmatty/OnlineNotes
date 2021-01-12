import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          {userInfo ? (
            <LinkContainer to='/notes'>
              <Navbar.Brand>Online Notes</Navbar.Brand>
            </LinkContainer>
          ) : (
            <LinkContainer to='/'>
              <Navbar.Brand>Online Notes</Navbar.Brand>
            </LinkContainer>
          )}
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {userInfo ? (
                <LinkContainer to='/notes'>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
              ) : (
                <LinkContainer to='/'>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
              )}
              {userInfo && (
                <LinkContainer to='/profile'>
                  <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
              )}
              <LinkContainer to='/aboutus'>
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <Fragment>
                  <Navbar.Text>Welcome {userInfo.name}</Navbar.Text>
                  <Nav.Link onClick={logoutHandler}>
                    <i className='fas fa-sign-out-alt'></i> Logout
                  </Nav.Link>
                </Fragment>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
