import Image from "next/image";
import Link from "next/link";

export default function Card({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/";

  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-white p-4 rounded-lg text-black shadow-md">
      <Image
        src={posterUrl}
        width={300}
        height={450}
        alt={movie.title || "Sin título"}
        className="rounded-lg"
      />
      <h2 className="text-center font-semibold">{movie.title}</h2>
      <p className="text-gray-700">⭐ {movie.vote_average}</p>
      <Link href={`${movie.id}`} className="text-blue-500 hover:underline">
        Ver detalle
      </Link>
    </div>
  );
}
