import { tmdb } from "./fetch";
import { movieListSchema, movieDetailSchema, genreListSchema } from "./schemas";

export async function getPopularMovies() {
  return tmdb("/movie/popular", movieListSchema);
}

export async function getTrendingMovies(timeWindow: "day" | "week") {
  return tmdb(`/trending/movie/${timeWindow}`, movieListSchema);
}

export async function getMovieDetail(id: number) {
  return tmdb(`/movie/${id}?append_to_response=videos,credits`, movieDetailSchema);
}

export async function searchMovies(query: string, page = 1) {
  return tmdb("/search/movie", movieListSchema, { query, page: String(page) });
}

export async function getGenres() {
  return tmdb("/genre/movie/list", genreListSchema);
}

export async function getMovieRecommendations(id: number) {
  return tmdb(`/movie/${id}/recommendations`, movieListSchema);
}

export async function discoverMovies(page = 1) {
  const cutoff = new Date();
  cutoff.setFullYear(cutoff.getFullYear() - 3);
  const fromDate = cutoff.toISOString().split("T")[0];

  return tmdb("/discover/movie", movieListSchema, {
    page: String(page),
    "primary_release_date.gte": fromDate,
    sort_by: "popularity.desc",
  });
}
