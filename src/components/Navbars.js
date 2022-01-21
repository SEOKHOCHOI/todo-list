import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Navbars.css';

function Navbars() {
  return(
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container className="navColor">
          <Navbar.Brand href="#" id="font">TodoList</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navbars;