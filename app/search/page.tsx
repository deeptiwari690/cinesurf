import Link from "next/link";
import { searchMovies } from "@/lib/tmdb/queries";
import MovieCard from "@/features/movies/MovieCard";
type Props = {
  searchParams: Promise<{ q?: string; page?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q = "", page = "1" } = await searchParams;
  const data = await searchMovies(q, Number(page));

  return (
    <main className="flex flex-col gap-6">
      <h1 className="text-xl font-bold">Results for &ldquo;{q}&rdquo;</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {data.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        {Number(page) > 1 && (
          <Link
            href={`/search?q=${q}&page=${Number(page) - 1}`}
            className="rounded-md bg-slate-800 px-4 py-2 transition hover:brightness-110"
          >
            Previous
          </Link>
        )}
        <span className="text-slate-400">
          Page {page} of {data.total_pages}
        </span>
        {Number(page) < data.total_pages && (
          <Link
            href={`/search?q=${q}&page=${Number(page) + 1}`}
            className="rounded-md bg-slate-800 px-4 py-2 transition hover:brightness-110"
          >
            Next
          </Link>
        )}
      </div>
    </main>
  );
}
