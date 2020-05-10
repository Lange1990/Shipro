import React, { Component } from "react";
import { connect } from "react-redux";
import Drawer from "./Drawer";

class DrawerContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Drawer user={this.props.state.user} />;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    state,
  };
};

export default connect(mapStateToProps, null)(DrawerContainer);
