import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovieDetail = async (movieId) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=eb7e3fd7272143562cec959061b5eb32`
      );
      setMovie(res.data);
    } catch (error) {
      console.error("Error al obtener detalle de la película:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchMovieDetail(id);
    }
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;
  if (!movie) return <p>No se encontró la película.</p>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={450}
      />
      <p className="mt-4">{movie.overview}</p>
      <p className="mt-2">⭐ {movie.vote_average} / 10</p>
      <p className="mt-2">🎬 Estreno: {movie.release_date}</p>
    </div>
  );
}
