import { Suspense } from "react";
import Hero from "@/components/Hero";
import PopularRow from "@/features/movies/PopularRow";
import TrendingRow from "@/features/movies/TrendingRow";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function Home({ searchParams }: Props) {
  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <Suspense fallback={<p>Loading...</p>}>
        <TrendingRow searchParams={searchParams} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <PopularRow />
      </Suspense>
    </main>
  );
}
