import React, { Component } from "react";
import { Background } from "./style";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let navigation = this.props.props.navigation;
    return (
      <Background>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <MaterialCommunityIcons
            style={{ marginLeft: 20, marginTop: 14 }}
            name="menu"
            color="#ffffff"
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <FontAwesome5
            style={{ marginRight: 20, marginTop: 14 }}
            name="user-circle"
            color="#ffffff"
            size={25}
          />
        </TouchableOpacity>
      </Background>
    );
  }
}

export default connect(null, null)(Navbar);
