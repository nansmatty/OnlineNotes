import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='bg-primary'>
      <Container>
        <Row>
          <Col className='text-center text-white py-3 my-2 '>
            <strong>Copyright &copy; OnlineNotes 2021</strong>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
