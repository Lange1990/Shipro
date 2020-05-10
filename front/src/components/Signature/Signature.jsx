import React from "react";
import { View, Alert } from "react-native";
import Signature from "react-native-signature-canvas";
import { connect } from "react-redux";
import Axios from "axios";
import { fetchPedidos } from "../../../redux/actions/pedidos";
import AwesomeAlert from "react-native-awesome-alerts";
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

class SignatureScreen extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { signature: null };

    this.handleSignature = this.handleSignature.bind(this);
  }
  handleSignature = (img) => {
    let user = this.props.user.user;
    let authOptions = {
      method: "POST",
      url: "https://shipro.proapi/ar/envio-completado",
      data: {
        envio_id: `${this.props.route.params.orden}`,
        firma: `${img}`,
      },
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      json: true,
    };

    return Axios(authOptions)
      .then((res) => {
        this.props.pedidosRepartidor(user.id, user.token).then(() =>
          Alert.alert(
            "Firma enviada correctamente",
            `El estado de envío fue cambiado a "Entregado".`,
            [
              {
                text: "Aceptar",
                onPress: () => this.props.navigation.navigate("Shipro"),
              },
            ],
            { cancelable: false }
          )
        );
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Signature
          onOK={(img) => {
            this.handleSignature(img);
          }}
          onEmpty={() => {
            Alert.alert(
              "No se registró una firma",
              "Por favor, ingresá una firma para poder continuar.",
              [
                {
                  text: "Aceptar",
                  onPress: () =>
                    this.props.navigation.navigate("Root", {
                      screen: "Signature",
                    }),
                },
              ],
              { cancelable: false }
            );
          }}
          descriptionText="Firma"
          clearText="Reintentar"
          confirmText="Confirmar"
          webStyle={`.m-signature-pad--footer
            .button {
              background-color: #3a547c;
              width:49%;
              border-radius:0px;
              height: 100%;
              color: #FFF;
              font-size: 15px;
          }`}
          autoClear={true}
          imageType={"image/svg+xml"}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignatureScreen);
