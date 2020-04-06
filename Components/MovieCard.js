import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MovieCard = ({ movieInfo, navigation }) => {
  const onPressCardHandler = () => {
    navigation.navigate("Details", { id: movieInfo.id });
  };
  const setOpacity = () => {
    if (movieInfo.backgroundImageURL) {
      return { backgroundColor: "rgba(255,255,255,0.8)" };
    }
  };
  const setBorderBottom = () => {
    if (movieInfo.backgroundImageURL) {
      return { borderBottomColor: "#DDD", borderBottomWidth: 1 };
    }
  };

  return (
    <TouchableOpacity
      onPress={onPressCardHandler}
      style={{
        ...setBorderBottom(),
      }}
    >
      <ImageBackground
        source={{ uri: movieInfo.backgroundImageURL }}
        style={{ resizeMode: "cover" }}
      >
        <View
          style={{
            ...setOpacity(),
            display: "flex",
            flexDirection: "row",
            height: 150,
            overflow: "hidden",
          }}
        >
          <View>
            <Image
              style={{ width: 100, height: 150, resizeMode: "cover" }}
              source={{ uri: movieInfo.imageURL }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              alignContent: "space-between",
              padding: 14,
            }}
          >
            <Text style={{ alignSelf: "center", fontSize: 22, color: "#000" }}>
              {movieInfo.title}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 8,
              }}
            >
              <Text style={{ fontSize: 12, color: "#666" }}>
                {movieInfo.releaseDate}
              </Text>
              <Text style={{ fontSize: 12, color: "#b2b200" }}>
                {movieInfo.vote}
              </Text>
            </View>
            <Text style={{ fontSize: 12, color: "#666", textAlign: "justify" }}>
              {movieInfo.overview}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
