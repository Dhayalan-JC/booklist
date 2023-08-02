import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ListComponentContent } from './List.component';
import { loadData } from './../../actions/list.action';

class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    // const date = new Date();
    this.list = this.props.lists.data;
    return (
      <ListComponentContent
        list={this.props.lists.data}
        // date={date.toLocaleDateString()}
      />
    );
  }
}
const mapStateToProp = (state) => {
  return {
    lists: state.lists,
  };
};

const mapDispatchToProps = {
  loadData,
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(withRouter(ListComponent));
