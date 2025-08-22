"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import MoviesGrid from "./MoviesGrid";

export default function MoviesGridContainer() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=eb7e3fd7272143562cec959061b5eb32"
      );
      setMovies(res.data.results);
    } catch (error) {
      console.error("Error al obtener películas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <MoviesGrid movies={movies} loading={loading} />;
}
