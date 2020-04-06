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

const MoviesContainer = ({ navigation, listType, input }) => {
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (listType === "Top Rated") {
      fetchTopRatedMovies();
    } else if (listType === "Most Popular") {
      fetchMostPopularMovies();
    } else if (listType === "Now Playing") {
      fetchNowPlayingMovies();
    } else if (listType === "Search Movie") {
      fetchSearchedMovie();
    }
  }, []);

  const fetchTopRatedMovies = async () => {
    const URL =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4655f3c5728527a96ab8a6642dac3a6f&language=en-US&page=1";
    const response = await fetch(URL);
    const json = await response.json();
    setMoviesInfo(json.results);
    if (moviesInfo) {
      console.log("Top Rated Movies Fetched !");
      setLoading(false);
    }
  };
  const fetchMostPopularMovies = async () => {
    const URL =
      "https://api.themoviedb.org/3/movie/popular?api_key=4655f3c5728527a96ab8a6642dac3a6f&language=en-US&page=1";
    const response = await fetch(URL);
    const json = await response.json();
    setMoviesInfo(json.results);
    if (moviesInfo) {
      console.log("Most Popular Movies Fetched !");
      setLoading(false);
    }
  };
  const fetchNowPlayingMovies = async () => {
    const URL =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=4655f3c5728527a96ab8a6642dac3a6f&language=en-US&page=1";
    const response = await fetch(URL);
    const json = await response.json();
    setMoviesInfo(json.results);
    if (moviesInfo) {
      console.log("Now Playing Movies Fetched !");
      setLoading(false);
    }
  };
  const fetchSearchedMovie = async () => {
    const text = input;
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=4655f3c5728527a96ab8a6642dac3a6f&language=en-US&query=${text}&page=1&include_adult=false`;
    const response = await fetch(URL);
    const json = await response.json();
    setMoviesInfo(json.results);
    if (moviesInfo) {
      console.log("Searched Movies Fetched !");
      setLoading(false);
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
              backgroundImageURL: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
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
