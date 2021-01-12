import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import MainScreen from './screen/MainScreen';
import LoginScreen from './screen/LoginScreen';
import NotesScreen from './screen/NotesScreen';
import RegisterScreen from './screen/RegisterScreen';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          {!userInfo && (
            <Fragment>
              <Route path='/' component={MainScreen} exact />
              <Route path='/login' component={LoginScreen} exact />
              <Route path='/register' component={RegisterScreen} exact />
            </Fragment>
          )}
          {userInfo && <Route path='/notes' component={NotesScreen} exact />}
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
