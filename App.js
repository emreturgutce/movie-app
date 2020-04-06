import React from "react";
import { StyleSheet, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./Screens/Home";
import MoviesScreen from "./Screens/Movies";
import DetailsScreen from "./Screens/Details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: "Movie App",
            headerStyle: {
              backgroundColor: "#888",
            },
            headerTintColor: "#EEE",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Movies"
          options={({ route }) => ({
            title: route.params.name,
            headerStyle: {
              backgroundColor: "#888",
            },
            headerTintColor: "#EEE",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
          component={MoviesScreen}
        />
        <Stack.Screen
          name="Details"
          options={({ route }) => ({
            title: route.params.name,
            headerStyle: {
              backgroundColor: "#888",
            },
            headerTintColor: "#EEE",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("main", () => App);

const styles = StyleSheet.create({});
