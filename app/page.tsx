import { Suspense } from "react"
import Hero from "@/components/Hero"
import PopularRow from "@/features/movies/PopularRow"
import TrendingRow from "@/features/movies/TrendingRow"
import MovieRowSkeleton from "@/components/ui/MovieRowSkeleton"

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function Home({ searchParams }: Props) {
  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <Suspense fallback={<MovieRowSkeleton />}>
        <TrendingRow searchParams={searchParams} />
      </Suspense>
      <Suspense fallback={<MovieRowSkeleton />}>
        <PopularRow />
      </Suspense>
    </main>
  )
}
