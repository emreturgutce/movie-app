import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Details = ({ route, navigation }) => {
  const [details, setDetails] = useState({});
  const [similarMovieImages, setSimilarMovieImages] = useState([]);
  const [similarMovieIDs, setSimilarMovieIDs] = useState([]);
  useEffect(() => {
    getMovieDetails();
    getSimilarMovies();
  }, [details]);
  const getMovieDetails = async () => {
    const { id } = route.params;
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=4655f3c5728527a96ab8a6642dac3a6f&language=en-US`;
    const response = await fetch(URL);
    const json = await response.json();
    setDetails({
      imageURL: `https://image.tmdb.org/t/p/w500${json.poster_path}`,
      backgroundImageURL: `https://image.tmdb.org/t/p/w500${json.backdrop_path}`,
      title: json.title,
      vote: json.vote_average,
      releaseDate: json.release_date.split("-")[0],
      overview: json.overview,
      genres: json.genres.map((genre) => genre.name).toString(),
    });
  };
  const getSimilarMovies = async () => {
    const { id } = route.params;
    const URL = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=4655f3c5728527a96ab8a6642dac3a6f&language=en-US`;
    const response = await fetch(URL);
    const json = await response.json();
    setSimilarMovieImages(
      json.results.map(
        (movie) => `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      )
    );
    setSimilarMovieIDs(json.results.map((movie) => movie.id));
  };

  const onPressSimilarMovie = (id) => {
    navigation.navigate("Details", { id });
  };

  return (
    <View>
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
        }}
        source={{ uri: details.backgroundImageURL }}
      >
        <View
          style={{ backgroundColor: "rgba(255,255,255,0.8)", height: "100%" }}
        >
          <View style={{ height: "100%", padding: 16 }}>
            <View
              style={{ display: "flex", flexDirection: "row", height: 200 }}
            >
              <Image
                style={{ width: 150, height: "100%", resizeMode: "cover" }}
                source={{ uri: details.imageURL }}
              />
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flex: 1,
                  paddingHorizontal: 16,
                }}
              >
                <Text style={{ textAlign: "center", fontSize: 24 }}>
                  {details.title}
                </Text>
                <Text
                  style={{ textAlign: "left", fontSize: 14, color: "#666" }}
                >
                  {details.releaseDate}
                </Text>
                <Text
                  style={{ textAlign: "left", fontSize: 14, color: "#666" }}
                >
                  {details.genres}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon name="imdb" size={36} color="#e2b616" />
                  <Text style={{ paddingLeft: 12, fontSize: 14 }}>
                    {details.vote}
                  </Text>
                  <Text style={{ fontSize: 10, color: "#888", marginTop: 5 }}>
                    /10
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ marginVertical: 19 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Sinopsis</Text>
              <Text style={{ fontSize: 14 }}>{details.overview}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => onPressSimilarMovie(similarMovieIDs[0])}
              >
                <Image
                  style={{ resizeMode: "cover", width: 115, height: 150 }}
                  source={{ uri: similarMovieImages[0] }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPressSimilarMovie(similarMovieIDs[1])}
              >
                <Image
                  style={{ resizeMode: "cover", width: 115, height: 150 }}
                  source={{ uri: similarMovieImages[1] }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onPressSimilarMovie(similarMovieIDs[2])}
              >
                <Image
                  style={{ resizeMode: "cover", width: 115, height: 150 }}
                  source={{ uri: similarMovieImages[2] }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
