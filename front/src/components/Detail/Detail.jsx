import React from "react";
import { View, ScrollView, Linking } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Card,
  Title,
  Hr,
  Column,
  TextInfo,
  Ir,
  BtnFirma,
  ButtonTxt,
  FirmaTxt,
  GMaps,
  Cancelar,
  Confirmar,
  StateTitle,
  Wrapper,
  TitleContainer,
  WrapperExt,
  TextTitle,
  Info,
  States,
} from "./style";
import { connect } from "react-redux";
import { fetchPedidos } from "../../../redux/actions/pedidos";

const Detail = ({
  navigation,
  route,
  toggle,
  estadoCambio,
  newState,
  handleSubmit,
  open,
  fontColor,
  colores,
}) => {
  let orden = route.params.order;
  const estados = [
    { estado: "Pendiente", key: 1 },
    { estado: "En ruta", key: 2 },
    { estado: "Próximo a entregarse", key: 3 },
    { estado: "Recoordinar", key: 4 },
  ];

  return (
    <Container>
      <Card>
        <Title>Pedido nro {orden.orden_id}</Title>
        <Hr></Hr>
        <ScrollView>
          <Column>
            <View>
              {open ? (
                estados.map((item) => (
                  <View key={item.key}>
                    <WrapperExt
                      onPress={() => {
                        estadoCambio(item.estado);
                        toggle(!open);
                      }}
                    >
                      {item.estado === newState ? (
                        <States style={{ fontWeight: "bold" }}>
                          {item.estado}
                        </States>
                      ) : (
                        <States>{item.estado}</States>
                      )}
                    </WrapperExt>
                  </View>
                ))
              ) : (
                <Wrapper onPress={() => toggle(!open)}>
                  <TitleContainer
                    style={{
                      backgroundColor: colores(newState),
                    }}
                  >
                    <StateTitle
                      style={{
                        color: fontColor(newState),
                      }}
                    >
                      {newState}
                    </StateTitle>
                  </TitleContainer>
                </Wrapper>
              )}
            </View>
            <View
              style={{ alignItems: "flex-end", justifyContent: "flex-end" }}
            >
              <BtnFirma
                onPress={() => {
                  navigation.navigate("Signature", { orden: orden.orden_id });
                }}
              >
                <FirmaTxt>Solicitar firma</FirmaTxt>
              </BtnFirma>
            </View>
            <View>
              <GMaps
                onPress={() => {
                  Linking.openURL(
                    `https://www.google.com/maps/dir/?api=1&destination=${orden.calle}+${orden.altura}+${orden.localidad}`
                  );
                }}
              >
                <Info style={{ paddingTop: 10 }}>
                  <TextTitle>Dirección:</TextTitle>
                  <TextInfo>
                    {orden.calle} {orden.altura}
                  </TextInfo>
                  <Feather
                    style={{
                      alignSelf: "center",
                      color: "#3a547c",
                      marginLeft: 15,
                    }}
                    name="map-pin"
                    size={23}
                  />
                  <Ir>IR</Ir>
                </Info>
              </GMaps>
              <Info>
                <TextTitle>Piso: </TextTitle>
                <TextInfo>{orden.piso}</TextInfo>
                <TextTitle>Dpto: </TextTitle>
                <TextInfo>{orden.dpto}</TextInfo>
              </Info>
              <Info>
                <TextTitle>Provincia: </TextTitle>
                <TextInfo>{orden.provincia}</TextInfo>
              </Info>
              <Info>
                <TextTitle>Localidad: </TextTitle>
                <TextInfo>{orden.localidad}</TextInfo>
              </Info>
              <Info>
                <TextTitle>Recibe: </TextTitle>
                <TextInfo>{orden.nombre_destinatario}</TextInfo>
              </Info>
              <Info>
                <TextTitle>Documento: </TextTitle>
                <TextInfo>{orden.documento_destinatario}</TextInfo>
              </Info>
              <Info>
                <TextTitle>Teléfono: </TextTitle>
                <TextInfo>{orden.telefono_destinatario}</TextInfo>
              </Info>
              <TextTitle>Fecha y hora del pedido: </TextTitle>
              <TextInfo style={{ marginLeft: 30, marginTop: -15 }}>
                {orden.fecha_hora}
              </TextInfo>
              <Info style={{ marginBottom: 70 }}>
                <TextTitle>Sucursal: </TextTitle>
                <TextInfo>{orden.sucursal.descripcion}</TextInfo>
              </Info>
            </View>
          </Column>
        </ScrollView>
        <Cancelar
          style={{ borderBottomLeftRadius: 9 }}
          onPress={() => {
            navigation.navigate("Root", { screen: "Shipro" });
          }}
        >
          <ButtonTxt>Cancelar</ButtonTxt>
        </Cancelar>
        <Confirmar
          style={{ borderBottomRightRadius: 9 }}
          onPress={() => handleSubmit()}
        >
          <ButtonTxt>Confirmar</ButtonTxt>
        </Confirmar>
      </Card>
    </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
