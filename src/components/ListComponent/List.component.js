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
        <Col sm={10} className="text-center">
          <h1 style={{ padding: '0 0 0 12rem' }}>Book List</h1>
        </Col>
        <Col sm={2}>
          <span className="d-block text-right">Today : {props.date}</span>
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
