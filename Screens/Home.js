import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import SearchBar from "../Components/SearchBar";
import HomeContainer from "../Components/HomeContainer";

const Home = ({ navigation, router }) => {
  return (
    <View>
      <SearchBar navigation={navigation} />
      <HomeContainer router={router} navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
