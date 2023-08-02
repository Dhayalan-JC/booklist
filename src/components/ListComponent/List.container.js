import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ListComponentContent } from './List.component';
import { loadData } from './../../actions/list.action';

class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    // console.log('PROPS ME :::', this.props.lists.data);
    // console.log('STATE ME :::', this.state.lists);
    // const { author, country, language, link, pages, title, year, id } =
    // const { list } = this.props;
    // this.setState = list;
    return <ListComponentContent list={this.props.lists.data} />;
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
