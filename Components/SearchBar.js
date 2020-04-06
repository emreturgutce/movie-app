import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBar = ({ navigation }) => {
  const [input, setInput] = useState("");
  const handleButtonPressed = () => {
    navigation.navigate("Movies", { listType: "Search Movie", input });
    setInput("");
  };
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
        placeholder="Search Movie"
        value={input}
        onChangeText={(text) => setInput(text)}
        style={{
          flex: 1,
          color: "#444",
          paddingHorizontal: 18,
          fontSize: 22,
        }}
      />
      <Button
        onPress={handleButtonPressed}
        title="Search"
        color="#888"
        style={{
          color: "#FFF",
        }}
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
