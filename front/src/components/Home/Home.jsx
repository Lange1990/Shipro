import React from "react";
import { View, ScrollView, Linking, TouchableOpacity } from "react-native";
import {
  Container,
  Card,
  Title,
  Hr,
  Row,
  NroTxt,
  Button,
  ButtonTxt,
  Estado,
  Color,
  SinPedidos,
} from "./style";

export default ({ navigation, pedidos, detailId, fontColor, colores }) => {
  let ped = pedidos.pedidos;

  return (
    <Container>
      <Card>
        <Title>Pedidos</Title>
        <Hr></Hr>
        <ScrollView>
          {ped.length ? (
            ped.map((pedido) => {
              return (
                <Row key={pedido.orden_id}>
                  <View style={{ flexDirection: "row", width: 100 }}>
                    <Color
                      style={{
                        marginLeft: 20,
                        backgroundColor: colores(pedido.estado),
                      }}
                    ></Color>
                    <Estado>
                      {pedido.estado === "Próximo a entregarse"
                        ? "Prox. a entregar"
                        : pedido.estado}
                    </Estado>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(
                        `https://www.google.com/maps/dir/?api=1&destination=${pedido.calle}+${pedido.altura}+${pedido.localidad}`
                      )
                    }
                  >
                    <NroTxt>
                      {pedido.calle} {pedido.altura}
                    </NroTxt>
                  </TouchableOpacity>
                  <View>
                    <Button
                      onPress={() => {
                        detailId(pedido);
                      }}
                    >
                      <ButtonTxt>{pedido.orden_id}</ButtonTxt>
                    </Button>
                  </View>
                </Row>
              );
            })
          ) : (
            <SinPedidos>¡No hay pedidos!</SinPedidos>
          )}
        </ScrollView>
      </Card>
    </Container>
  );
};
