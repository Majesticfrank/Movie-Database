// import axios from 'axios'
// export const fetchMoviesByTitle = async (title) => {
//     const apiKey = "7bdba4cb"; // Replace with your valid key
//     const url = `http://www.omdbapi.com/?s=${title}&apikey=${apiKey}`;
  
//     try {
//       const response = await axios.get(url);
//       return response.data; // Return the entire response for debugging
//     } catch (error) {
//       console.error("Error fetching movies:", error.message);
//       throw error;
//     }
//   };
  

import axios from "axios";

const apiKey = "7bdba4cb";

export const fetchMoviesByTitle = async (title) => {
  const url = `http://www.omdbapi.com/?s=${title}&apikey=${apiKey}`;
  try {
    const response = await axios.get(url);
    if (response.data.Response === "True") {
      return response.data.Search;
    } else {
      throw new Error(response.data.Error);
    }
  } catch (error) {
    throw new Error("Failed to fetch movie data");
  }
};

export const fetchMovieDetails = async (imdbID) => {
    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
    try {
      const response = await axios.get(url);
      if (response.data.Response === "True") {
        return response.data; // Returns the detailed movie object
      } else {
        throw new Error(response.data.Error);
      }
    } catch (error) {
      throw new Error("Failed to fetch movie details");
    }
  };