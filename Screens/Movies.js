import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MoviesContainer from "../Components/MoviesContainer";

const Movies = ({ navigation, route }) => {
  return (
    <View>
      <MoviesContainer
        navigation={navigation}
        listType={route.params.listType}
        input={route.params.input}
      />
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({});
