import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ListComponentContent } from './List.component';
// import { loadData } from './../../actions';

class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.State = {};
  }
  componentDidMount() {
    // this.props.loadData();
  }
  render() {
    return <ListComponentContent />;
  }
}
const mapStateToProp = ({ data = {}, isloading = false }) => {
  return {
    data,
    isloading,
  };
};

const mapDispatchToProps = {
  // loadData,
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(withRouter(ListComponent));
