import { getPopularMovies } from "@/lib/tmdb/queries"
import MovieRowSlider from "./MovieRowSlider"


export default async function PopularRow() {
  const { results } = await getPopularMovies()

  return (
    <section>
      <h2 className="mbe-4 text-xl font-bold">What&apos;s Popular</h2>
      <MovieRowSlider movies={results} />
    </section>
  )
}
