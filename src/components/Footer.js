
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container className="text-center">
        <span>&copy; {new Date().getFullYear()} feathersmp. All Rights Reserved. | <a href="https://discord.feathersmp.uk" target="_blank" rel="noopener noreferrer">Discord</a></span>
      </Container>
    </footer>
  );
};

export default Footer;
