import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Welcome = () => (
  <Card border='success' style={{ width: '18rem' }}>
    <Card.Header>Images Gallery</Card.Header>
    <Card.Body>
      <Card.Title>Welcome</Card.Title>
      <Card.Text>
        This is a simple application that retrieves photos using Unspash API. In
        order to start enter any searchterm in the input field.
        <Button variant='primary' href='https://unsplash.com' target='_blank'>
          Learn more
        </Button>
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Welcome;
