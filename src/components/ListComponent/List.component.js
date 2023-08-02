import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const ListComponentContent = (props) => {
  console.log('PRINT MEa ::::', props.list);
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <span className="d-block text-right">Today : {props.date}</span>
          <h1>Book List</h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <input className="form-control" type="text" />
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};
