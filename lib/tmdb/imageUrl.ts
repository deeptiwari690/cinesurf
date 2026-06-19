type PosterSize = "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

export function getImageUrl(path: string, size: PosterSize): string {
  return `${IMAGE_BASE_URL}${size}${path}`;
}
