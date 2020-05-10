import React, { useState } from "react";
import Detail from "./Detail";
import axios from "axios";
import { connect } from "react-redux";
import { fetchPedidos } from "../../../redux/actions/pedidos";
import { Linking } from "react-native";
const DetailContainer = ({ navigation, route, user, pedidosRepartidor }) => {
  let orden = route.params.order;
  // const text = `¡Hola ${orden.nombre_destinatario}! Tu envío número ${orden.orden_id} está en camino.`;
  const text = `¡Hola  ${orden.nombre_destinatario}! Tu envío número ${orden.orden_id} está en camino.`;

  const [open, setOpen] = useState(false);
  const [newState, setNewState] = useState(orden.estado);
  const toggle = () => setOpen(!open);
  const estadoCambio = (item) => {
    setNewState(item);
  };
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

  function fontColor(estado) {
    if (estado === "En ruta" || estado === "Próximo a entregarse") {
      return "#3a547c";
    } else {
      return "white";
    }
  }

  const handleSubmit = () => {
    let authOptions = {
      method: "POST",
      url: "https://shipro.pro/api/ar/actualizar-envios",
      data: {
        pedidos: [
          {
            orden_id: `${orden.orden_id}`,
            nuevo_estado: `${newState}`,
          },
        ],
      },
      headers: {
        Authorization: `Bearer ${user.user.token}`,
      },
      json: true,
    };
    return axios(authOptions)
      .then((res) => {
        pedidosRepartidor(user.user.id, user.user.token).then(() => {
          if (newState === "Próximo a entregarse") {
            Linking.openURL(
              `whatsapp://send?text=${text}&phone=549${orden.telefono_destinatario}`
            ).then(() => navigation.navigate("Root", { screen: "Shipro" }));
          }
          navigation.navigate("Root", { screen: "Shipro" });
        });
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  return (
    <Detail
      handleSubmit={handleSubmit}
      newState={newState}
      estadoCambio={estadoCambio}
      toggle={toggle}
      route={route}
      navigation={navigation}
      open={open}
      colores={colores}
      fontColor={fontColor}
    />
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
