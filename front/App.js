import React, { Component } from "react";
import configureStore from "./redux/index";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import DrawerContainer from "./src/components/Drawer/DrawerContainer";
import LoginContainer from "./src/components/Login/LoginContainer";
import ActiveContainer from "./src/components/Active/ActiveContainer";
import { createStackNavigator } from "@react-navigation/stack";

const store = configureStore();
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginContainer}
              options={{
                header: () => null,
              }}
            />
            <Stack.Screen
              name="Active"
              component={ActiveContainer}
              options={{
                header: () => null,
              }}
            />
            <Stack.Screen
              name="Root"
              component={DrawerContainer}
              options={{
                header: () => null,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
