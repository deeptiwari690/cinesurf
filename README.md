# CineSurf

[View live →](https://cinesurf.vercel.app)

A movie discovery app built with Next.js 16 — real production patterns, not a tutorial.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind v4 · TanStack Query · Zod · Supabase · Vercel

## What's in

- Server Components with streaming and Suspense
- `use cache` for server-side TMDB response caching
- Route Handlers proxying TMDB for client-side fetches
- Trending row with day/week toggle — URL state, server re-renders
- Search with pagination and empty state
- Movie detail with `notFound()` on missing IDs
- Error boundaries with illustrated error states per error type
- Loading skeletons per route and section

## Running locally

```bash
npm install
# add TMDB_ACCESS_TOKEN to .env.local
npm run dev
```

## Deploy

```bash
npm run deploy
```
