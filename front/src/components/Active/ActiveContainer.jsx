import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Active from "./Active";
import { connect } from "react-redux";
import axios from "axios";

const ActiveContainer = ({ navigation, user }) => {
  const Navig = () => {
    return axios
      .get(`https://shipro.pro/api/ar/activo/${user.user.id}`, {
        headers: {
          Authorization: `Bearer ${user.user.token}`,
        },
      })
      .then((data) => navigation.navigate("Root", { screen: "Shipro" }))
      .catch((err) => console.log(err));
  };
  return (
    <View>
      <Active navigation={navigation} Navig={Navig} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    pedidos: state.pedidos,
    state,
  };
};

export default connect(mapStateToProps, null)(ActiveContainer);
