import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { LisComponentContent } from "./List.component";
import { loadData } from "./../../actions";

class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.State = {};
  }
  render() {
    return <LisComponentContent />;
  }
}
const mapStateToProp = ({ data }) => {
  const { list, isloading } = data;
  return {
    list,
    isloading,
  };
};

const mapDispatchToProps = {
  loadData,
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(withRouter(ListComponent));
