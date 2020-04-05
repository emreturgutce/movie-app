import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import SearchBar from "../Components/SearchBar";
import MoviesContainer from "../Components/MoviesContainer";
import Menu from "../Components/Menu";

const Home = ({ navigation }) => {
  const [opacity, setOpacity] = useState(1);
  const [showMenu, setShowMenu] = useState(false);

  const onPressHandler = () => {
    setShowMenu(true);
    setOpacity(0.2);
  };

  const getMoviesHandle = () => {
    setShowMenu(false);
    setOpacity(1);
  };

  const onPressCancel = () => {
    setShowMenu(false);
    setOpacity(1);
  };

  return (
    <View style={{ position: "relative" }}>
      <View style={{ opacity }}>
        <SearchBar onPressHandler={onPressHandler} />
        <MoviesContainer navigation={navigation} />
      </View>
      {showMenu ? (
        <Menu getMoviesHandle={getMoviesHandle} onPressCancel={onPressCancel} />
      ) : null}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
