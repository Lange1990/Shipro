import React from "react";
import { Image } from "react-native";
import { Container } from "./styles";

export default () => {
  return (
    <Container>
      <Image
        style={{
          resizeMode: "contain",
          height: 100,
          width: 300,
        }}
        source={require("../../../assets/shipro.png")}
      />
    </Container>
  );
};
