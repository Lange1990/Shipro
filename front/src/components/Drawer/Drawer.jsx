import React from "react";
import { connect } from "react-redux";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Navbar from "../Navbar/Navbar";
import HomeContainer from "../Home/HomeContainer";
import DetailContainer from "../Detail/DetailContainer";
import Signature from "../Signature/Signature";
import { Username, Container, Hola, Hr, Txt } from "./style";
import Axios from "axios";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Container>
        <Hola>¡Hola</Hola>
        <Username>{`${props.user.user.username}!`}</Username>
        <Hr></Hr>
      </Container>
      <DrawerItem
        label="Inicio"
        onPress={() => props.navigation.navigate("Root", { screen: "Shipro" })}
      />
      <Txt>
        Por favor, desactivate cuando ya no estés disponible para trabajar.
      </Txt>
      <DrawerItem
        label="Desactivar"
        onPress={() => {
          return Axios.get(
            `https://shipro.pro/api/ar/inactivo/${props.user.user.id}`,
            {
              headers: {
                Authorization: `Bearer ${props.user.user.token}`,
              },
            }
          )
            .then((data) => {
              props.navigation.navigate("Active", props);
            })
            .catch((err) => console.log(err));
        }}
      />
    </DrawerContentScrollView>
  );
}

function Root(props) {
  return (
    <Stack.Navigator
      initialRouteName="Shiprop"
      screenOptions={{
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="Shipro"
        component={HomeContainer}
        options={{
          header: () => <Navbar props={props} />,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailContainer}
        options={{
          header: () => <Navbar props={props} />,
        }}
      />
      <Stack.Screen
        name="Signature"
        component={Signature}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          header: () => <Navbar props={props} />,
        }}
      />
    </Stack.Navigator>
  );
}

const DrawerComponent = ({ user }) => {
  return (
    <Drawer.Navigator
      headerMode="none"
      initialRouteName="Shipro"
      drawerType="slide"
      drawerStyle={{ width: 200 }}
      drawerContent={(props) => <CustomDrawerContent {...props} user={user} />}
    >
      <Drawer.Screen name="Root" component={Root} />
    </Drawer.Navigator>
  );
};

export default connect(null, null)(DrawerComponent);
