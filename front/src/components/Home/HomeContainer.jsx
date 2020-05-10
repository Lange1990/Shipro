import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Home from "./Home";
import { connect } from "react-redux";
import { fetchPedidos } from "../../../redux/actions/pedidos";

const HomeContainer = ({ navigation, pedidos, user, pedidosRepartidor }) => {
  function colores(estado) {
    if (estado === "Próximo a entregarse") {
      return "#72E273";
    } else if (estado === "Pendiente") {
      return "#F60202";
    } else if (estado === "En ruta") {
      return "#EAE604";
    } else if (estado === "Recoordinar") {
      return "#F39403";
    } else if (estado === "Entregado") {
      return "#109E2E";
    }
  }

  useEffect(() => {
    pedidosRepartidor(user.user.id, user.user.token);
  }, []);

  const detailId = (orden) => {
    navigation.navigate("Detail", { order: orden });
  };

  return (
    <View>
      <Home
        navigation={navigation}
        colores={colores}
        pedidos={pedidos}
        detailId={detailId}
      />
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

const mapDispatchToProps = (dispatch) => {
  return {
    pedidosRepartidor: (userId, token) => dispatch(fetchPedidos(userId, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
