import { getTrendingMovies } from "@/lib/tmdb/queries";
import MovieRowSlider from "./MovieRowSlider";
import TrendingToggle from "./TrendingToggle";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function TrendingRow({ searchParams }: Props) {
  const timeWindow = (await searchParams).window === "day" ? "day" : "week";
  const { results } = await getTrendingMovies(timeWindow);

  return (
    <section>
      <div className="flex items-center gap-4 mbe-4">
        <h2 className="text-xl font-bold">Trending</h2>
        <TrendingToggle active={timeWindow} />
      </div>
      <MovieRowSlider movies={results} />
    </section>
  );
}
