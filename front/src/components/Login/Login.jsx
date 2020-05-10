import React from "react";
import { Container, Title, Input, Button, ButtonText } from "./styles";

export default (props) => {
  return (
    <Container>
      <Title>Iniciar sesión</Title>
      <Input
        placeholder="Usuario"
        name="username"
        autoCapitalize="none"
        onChangeText={(e) => props.handleUsername(e)}
      />
      <Input
        secureTextEntry={true}
        placeholder="Contraseña"
        name="password"
        onChangeText={(e) => props.handlePassword(e)}
      />
      <Button onPress={props.handleSubmit}>
        <ButtonText>Confirmar</ButtonText>
      </Button>
    </Container>
  );
};
