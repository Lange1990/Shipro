import React from "react";
import { View, Text } from "react-native";
import { Btn, ButtonText, Container, Title } from "./style";

export default ({ Navig }) => {
  return (
    <Container>
      <View styles={{ justifyContent: "center", alignItems: "center" }}>
        <Title>
          Por favor, ingresá a la aplicación solo cuando estés disponible para
          trabajar.
        </Title>
        <Btn onPress={() => Navig()}>
          <ButtonText>Estoy activo</ButtonText>
        </Btn>
      </View>
    </Container>
  );
};
