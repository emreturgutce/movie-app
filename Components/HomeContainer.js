import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  ImageBackground,
} from "react-native";

import MovieCard from "./MovieCard";

const HomeContainer = ({ navigation }) => {
  const [upcomingMovieInfo, setUpcomingMovieInfo] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUpcomingMovie();
  }, []);
  const fetchUpcomingMovie = async () => {
    const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=4655f3c5728527a96ab8a6642dac3a6f&language=en-US&page=1`;
    const response = await fetch(URL);
    const json = await response.json();
    const upcomingMovies = json.results;
    const random = Math.floor(Math.random() * (upcomingMovies.length - 1));
    setUpcomingMovieInfo(upcomingMovies[random]);
    if (upcomingMovieInfo) {
      console.log("Upcoming movie has been set !");
      setLoading(false);
    }
  };
  const setBackgroundImage = () => {
    if (upcomingMovieInfo) {
      const URL = `https://image.tmdb.org/t/p/w500${upcomingMovieInfo.backdrop_path}`;
      return URL;
    }
    return null;
  };
  const setBackgroundOpacity = () => {
    if (upcomingMovieInfo) {
      const style = {
        backgroundColor: "rgba(255,255,255,0.8)",
      };
      return style;
    }
    return null;
  };
  return (
    <View>
      <ImageBackground
        source={{ uri: loading ? null : setBackgroundImage() }}
        style={{ resizeMode: "cover" }}
      >
        <View style={setBackgroundOpacity()}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 15,
              height: "100%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: 145,
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <Button
                onPress={() =>
                  navigation.navigate("Movies", {
                    listType: "Top Rated",
                    title: "Top Rated Movies",
                  })
                }
                title="Top Rated"
                color="#444"
                style={{
                  width: 105,
                  height: 35,
                  fontSize: 14,
                  color: "#DDD",
                  borderRadius: 4,
                  textAlign: "center",
                }}
              />
              <Button
                onPress={() =>
                  navigation.navigate("Movies", {
                    listType: "Most Popular",
                    title: "Most Popular Movies",
                  })
                }
                title="Most Popular"
                color="#444"
                style={{
                  width: "100%",
                  height: 35,
                  fontSize: 14,
                  color: "#DDD",
                  borderRadius: 4,
                  textAlign: "center",
                }}
              />
              <Button
                onPress={() =>
                  navigation.navigate("Movies", {
                    listType: "Now Playing",
                    title: "Now Playing Movies",
                  })
                }
                title="Now Playing"
                color="#444"
                style={{
                  width: "100%",
                  height: 35,
                  fontSize: 14,
                  color: "#DDD",
                  borderRadius: 4,
                  textAlign: "center",
                }}
              />
            </View>
            <View
              style={{
                width: "100%",
                borderBottomColor: "#707070",
                borderBottomWidth: 1,
                marginTop: 16,
              }}
            >
              <Text
                style={{
                  textTransform: "uppercase",
                  fontSize: 16,
                  color: "#000",
                  textAlign: "center",

                  padding: 15,
                }}
              >
                Upcoming
              </Text>
            </View>
            <View style={{ width: "100%", height: 150, marginTop: 48 }}>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <MovieCard
                  navigation={navigation}
                  movieInfo={{
                    id: upcomingMovieInfo.id,
                    imageURL: `https://image.tmdb.org/t/p/w500${upcomingMovieInfo.poster_path}`,

                    title: upcomingMovieInfo.title,
                    vote: upcomingMovieInfo.vote_average,
                    overview: upcomingMovieInfo.overview,
                    releaseDate: upcomingMovieInfo.release_date,
                  }}
                />
              )}
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeContainer;

const styles = StyleSheet.create({});
