import React from 'react';
import { Button, Image, Col } from 'react-bootstrap';

const Details = () => (
  <Col lg={4} className="text-center">
    <Image
      style={{ width: '140px', height: '140px' }}
      src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
      roundedCircle
      fluid
    />
    <h2>Heading</h2>
    <p>
      Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam
      id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac
      consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
    </p>
    <p>
      <Button variant="secondary">Secondary</Button>
    </p>
  </Col>
);

export default Details;
