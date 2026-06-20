import { getMovieDetail } from "@/lib/tmdb/queries";
import { formatDate } from "@/lib/tmdb/formatDate";
import { getImageUrl } from "@/lib/tmdb/imageUrl";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function MoviePage({ params }: Props) {
  const { id } = await params;
  const movie = await getMovieDetail(Number(id));
  return (
    <main className="flex flex-col gap-6">
      <div className="relative h-96">
        {movie.backdrop_path && (
          <Image
            src={getImageUrl(movie.backdrop_path, "original")}
            alt={movie.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-slate-400">
          {formatDate(movie.release_date)} · {movie.runtime} min · ⭐ {movie.vote_average.toFixed(1)}
        </p>
        <p className="text-slate-300 italic">{movie.tagline}</p>
        <p className="text-slate-100">{movie.overview}</p>
      </div>
    </main>
  );
}
