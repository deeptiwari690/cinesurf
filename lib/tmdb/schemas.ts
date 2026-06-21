import { z } from "zod";

export const movieSummarySchema = z.object({
  id: z.number(),
  title: z.string(),
  poster_path: z.string().nullable(),
  release_date: z.string(),
  vote_average: z.number(),
  genre_ids: z.array(z.number()),
});

export type MovieSummary = z.infer<typeof movieSummarySchema>;

export const movieListSchema = z.object({
  page: z.number(),
  results: z.array(movieSummarySchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type MovieList = z.infer<typeof movieListSchema>;

const genreSchema = z.object({ id: z.number(), name: z.string() });

const videoSchema = z.object({
  key: z.string(),
  name: z.string(),
  site: z.string(),
  type: z.string(),
  official: z.boolean(),
});

const castMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  character: z.string(),
  profile_path: z.string().nullable(),
  order: z.number(),
});

export const movieDetailSchema = z.object({
  id: z.number(),
  title: z.string(),
  overview: z.string(),
  tagline: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  release_date: z.string(),
  runtime: z.number().nullable(),
  vote_average: z.number(),
  genres: z.array(genreSchema),
  videos: z.object({ results: z.array(videoSchema) }),
  credits: z.object({ cast: z.array(castMemberSchema) }),
});

export type MovieDetail = z.infer<typeof movieDetailSchema>;

export const genreListSchema = z.object({
  genres: z.array(genreSchema),
});
