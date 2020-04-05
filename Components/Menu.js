import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Menu = ({ getMoviesHandle, onPressCancel }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        width: 240,
        height: 50,
        alignSelf: "center",
        backgroundColor: "#FFF",
        justifyContent: "center",
        top: "30%",
        borderRadius: 2,
      }}
    >
      <TouchableOpacity
        onPress={getMoviesHandle}
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 16,
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Text style={{ flex: 1, fontSize: 14 }}>Top Rated Movies</Text>
        <Icon name="check" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: "#333", height: 24, width: "100%" }}
        onPress={onPressCancel}
      >
        <Text
          style={{
            color: "#FFF",
            fontSize: 16,
            textAlign: "center",
            margin: "auto",
          }}
        >
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({});
