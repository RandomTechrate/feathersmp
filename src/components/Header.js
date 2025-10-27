
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: '1.5rem' }}>
          <img
            src="https://api.mcstatus.io/v2/icon/feathersmp.uk"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="feathersmp server icon"
            style={{ marginRight: '10px' }}
          />
          feathersmp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://discord.feathersmp.uk" target="_blank" rel="noopener noreferrer">Discord</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
