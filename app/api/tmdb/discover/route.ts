import { type NextRequest, NextResponse } from "next/server";
import { discoverMovies } from "@/lib/tmdb/queries";
import { TmdbError } from "@/lib/tmdb/tmdb";

export async function GET(request: NextRequest) {
  const page = Number(request.nextUrl.searchParams.get("page")) || 1;
  try {
    const data = await discoverMovies(page);
    return NextResponse.json(data);
  } catch (error) {
    const status = error instanceof TmdbError ? error.status : 500;
    return NextResponse.json({ error: "Failed to fetch movies" }, { status });
  }
}
