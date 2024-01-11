import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Table,
  Pagination,
  // Button,
} from "react-bootstrap";
// import { ListComponentContent } from './List.component';
import { getData } from "./../../actions";

class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      users: [],
      // lists: [],
      isEditable: false,
    };
  }
  componentDidMount() {
    // this.props.loadData();
    this.props.getData();
  }
  onTextChange = (e) => {
    e.preventDefault();
    this.searchText = e.target.value;
    console.log("Entered Data ::", this.searchText);
    const val = e.target.value;
    // this.setState({[e.target.name]:val},() =>{
    if (val === "") {
      console.log("IF ::", this.searchText);

      this.setState({ users: [] });
    } else {
      console.log("ELSE ::", this.searchText);
      console.log("LISTSS", this.props.users);
      let data = this.props.lists.users;
      let filteredUsers = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].title === val) {
          filteredUsers = data[i];
        }
      }
      // console.log(filteredUsers);
      this.users = filteredUsers;
    }
  };

  onEdit = (e) => {
    this.isEditable = true;
    // e.preventDefault();
    // this.selectedItem = e.target.value;
    console.log(e);
  };
  render() {
    // const date = new Date();
    // const { lists } = this.props.lists;
    const { users } = this.props.users;
    // const length = users.length;
    let active = 0;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }
    return (
      <Container>
        <Row>
          <Col sm={12} className="text-center">
            {/* <span className="d-block text-right">Today : {props.date}</span> */}
            <h1>Book List</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="text-center py-4 px-0">
            <input
              className="form-control searchinput"
              placeholder="Search Books by Title"
              type="text"
              name="searchText"
              autoComplete="off"
              onChange={this.onTextChange}
            />
          </Col>
        </Row>
        <Row className="pa-5 d-flex justify-space-evenly">
          {users.map((u) => (
            <React.Fragment key={u.id}>
              <h6>{u.name}</h6>
            </React.Fragment>
          ))}

          <Table responsive striped="columns" bordered hover>
            <thead>
              <tr>
                <th>Book Id</th>
                <th>Author</th>
                <th>Book Title</th>
                <th>Language</th>
                <th>Country</th>
                <th>Year</th>
                <th>User Action</th>
              </tr>
            </thead>
            {/* {this.state.searchText === "" ? (
              <tbody>
                {lists.map((u) => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.author}</td>
                    <td>{u.title}</td>
                    <td>{u.language}</td>
                    <td>{u.country}</td>
                    <td>{u.year}</td>
                    <td>
                      <Button
                        className="bg-success border-less"
                        onClick={this.onEdit(u)}
                      >
                        Update
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              "No Data Found"
            )} */}
          </Table>

          <Pagination>{items}</Pagination>
          {/* <Pagination>{lists.item}</Pagination> */}
        </Row>
      </Container>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    // lists: state.lists,
    users: state.users,
  };
};

const mapDispatchToProps = {
  // loadData,
  getData,
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(withRouter(ListComponent));
