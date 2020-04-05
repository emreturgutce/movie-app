import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBar = ({ onPressHandler }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#DDDDDD",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 18,
      }}
    >
      <Icon name="search" color="#000000" size={24} />
      <TextInput
        style={{
          flex: 1,
          color: "#444",
          paddingHorizontal: 18,
          fontSize: 22,
        }}
        placeholder="Search Movie"
      />
      <TouchableOpacity onPress={onPressHandler}>
        <Icon name="bars" color="#000000" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
