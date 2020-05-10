import React, { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import Login from "./Login";
import Splash from "../Splash/Splash.jsx";
import { connect } from "react-redux";
import { loginUser } from "../../../redux/actions/login";

const LoginContainer = ({ navigation, login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  const handleUsername = (e) => {
    setUsername(e);
  };
  const handlePassword = (e) => {
    setPassword(e);
  };

  const handleSubmit = () => {
    login(username, password).then((err) => {
      if (err) {
        Alert.alert(
          "Información incorrecta",
          "Usuario y/o contraseña incorrectos.",
          [
            {
              text: "Aceptar",
              onPress: () => navigation.navigate("Login"),
            },
          ],
          { cancelable: false }
        );
      } else {
        navigation.navigate("Active");
      }
    });
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {loading ? (
        <Splash />
      ) : (
        <View>
          <Login
            handleSubmit={handleSubmit}
            handlePassword={handlePassword}
            handleUsername={handleUsername}
          />
        </View>
      )}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user, password) => dispatch(loginUser(user, password)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
