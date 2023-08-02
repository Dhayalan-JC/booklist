import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ListComponentContent = (props) => {
  console.log('PRINT MEa ::::', props.list);
  console.log('DATE ::::', props.date);
  return (
    <Container>
      <Row>
        <Col sm={8} className="text-center">
          <span className="d-block text-right">Today : {props.date}</span>
          <h1>Book List</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="text-center">
          <input className="form-control" type="text" />
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};
