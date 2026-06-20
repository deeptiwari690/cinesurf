import { Suspense } from "react";
import Hero from "@/components/Hero";
import PopularRow from "@/features/movies/PopularRow";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <Suspense fallback={<p>Loading...</p>}>
        <PopularRow />
      </Suspense>
    </main>
  );
}
