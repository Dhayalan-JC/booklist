import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import BookIndexItem from './../common/BookIndexItem';

export const ListComponentContent = (props) => {
  // console.log('LIST ::: ::::', props);
  // console.log('DATE ::::', props.date);
  return (
    <Container>
      <Row>
        <Col sm={12} className="text-center">
          <h1 className="title">Book List</h1>
        </Col>
        {/* <Col sm={2}>
          <span className="d-block text-right">Today : {props.date}</span>
        </Col> */}
      </Row>
      <Row>
        <Col className="text-center">
          <input className="form-control" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            {/* {itemslist.map((item, index) => {
              return <li key={index}>{item}</li>;
            })} */}
          </ul>
          {/* {props.list.map((item, id) => (
            <BookIndexItem key={id} city={item} />
          ))} */}
        </Col>
      </Row>
    </Container>
  );
};
