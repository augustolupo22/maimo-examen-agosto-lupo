import Card from "@/app/components/Card";

export default function MoviesGrid({ movies, loading }) {
  if (loading) return <p>Cargando películas...</p>;

  if (!movies || movies.length === 0) {
    return <p>No hay películas para mostrar.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
