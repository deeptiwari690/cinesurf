import type { z } from "zod";
const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN!;

export class TmdbError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "TmdbError";
  }
}

export async function tmdb<S extends z.ZodType>(
  path: string,
  schema: S,
  searchParams?: Record<string, string>,
): Promise<z.infer<S>> {
  const url = new URL(`${BASE_URL}${path}`);
  if (searchParams) {
    url.search = new URLSearchParams(searchParams).toString();
  }
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  });
  if (!response.ok) {
    throw new TmdbError(response.status, `TMDB request failed: ${url}`);
  }
  const data = await response.json();
  return schema.parse(data);
}
