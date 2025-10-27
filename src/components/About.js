
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';

const About = () => {
  return (
    <Container className="my-5">
      <Card bg="dark" text="white">
        <Card.Header><FaInfoCircle /> About feathersmp</Card.Header>
        <Card.Body>
          <Card.Text>
            Welcome to feathersmp, a friendly and welcoming Minecraft community. 
            Our server is dedicated to providing a fun and engaging experience for all players.
            Whether you are a seasoned veteran or a new player, you will find a home here.
            Join us today and start your adventure!
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
