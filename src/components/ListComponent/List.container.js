import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
// import { ListComponentContent } from './List.component';
import { loadData } from './../../actions';

class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      lists: [],
    };
  }
  componentDidMount() {
    this.props.loadData();
    // this.props.getData();
  }

  render() {
    // const date = new Date();
    // this.list = this.props.lists.data;
    const { lists } = this.props.lists;
    // const { users } = this.props.users;
    // console.log(lists.data);
    console.log(lists);

    // this.lists = lists.data;
    return (
      <Container>
        <Row>
          <Col sm={12} className="text-center">
            {/* <span className="d-block text-right">Today : {props.date}</span> */}
            <h1>Book List</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="text-center">
            <input className="form-control" type="text" />
          </Col>
        </Row>
        <Row className="padd-4">
          {/* {users.map((u) => (
            <React.Fragment key={u.id}>
              <h6>{u.name}</h6>
            </React.Fragment>
          ))} */}
          {lists.map((u) => (
            <Col sm={4}>
              <React.Fragment key={u.id}>
                <h6>{u.title}</h6>
                {/* <h6>{u.author}</h6> */}
              </React.Fragment>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    lists: state.lists,
    users: state.users,
  };
};

const mapDispatchToProps = {
  loadData,
  // getData,
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(withRouter(ListComponent));
