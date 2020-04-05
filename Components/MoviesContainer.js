import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from "react-native";

import MovieCard from "./MovieCard";

const MoviesContainer = ({ navigation }) => {
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  const fetchTopRatedMovies = async () => {
    const URL =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4655f3c5728527a96ab8a6642dac3a6f&language=en-US&page=1";
    const response = await fetch(URL);
    const json = await response.json();
    setMoviesInfo(json.results);
    setLoading(false);
    if (moviesInfo) {
      console.log("Movies Fetched !");
    }
  };
  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator />
      ) : (
        moviesInfo.map((item) => (
          <MovieCard
            navigation={navigation}
            key={item.id}
            movieInfo={{
              id: item.id,
              imageURL: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              title: item.title,
              vote: item.vote_average,
              overview: item.overview,
              releaseDate: item.release_date,
            }}
          />
        ))
      )}
    </ScrollView>
  );
};

export default MoviesContainer;

const styles = StyleSheet.create({});
