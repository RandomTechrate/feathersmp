
import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import { FaGavel } from 'react-icons/fa';

const Rules = () => {
  const rules = [
    'Be respectful to all players and staff.',
    'No griefing or stealing.',
    'No cheating or hacking.',
    'No spamming or advertising.',
    'Have fun!',
  ];

  return (
    <Container className="my-5">
      <Card bg="dark" text="white">
        <Card.Header><FaGavel /> Server Rules</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {rules.map((rule, index) => (
              <ListGroup.Item key={index} className="bg-transparent text-white">{rule}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Rules;
