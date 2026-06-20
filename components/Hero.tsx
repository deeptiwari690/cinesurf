"use client";

import { useRouter } from "next/navigation";
import { type SubmitEvent, useId } from "react";
import { Search } from "lucide-react";

export default function Hero() {
  const router = useRouter();
  const id = useId();

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q") as string;
    if (q.trim()) router.push(`/search?q=${encodeURIComponent(q.trim())}`);
  }

  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold">Discover something to watch tonight</h1>
      <p className="mbs-2 text-slate-400">Search 900,000+ movies, TV shows, and more</p>
      <form onSubmit={handleSubmit} role="search" className="relative mx-auto mbs-6 max-w-xl">
        <Search className="absolute inset-bs-1/2 inset-s-3 -translate-y-1/2 text-slate-400" size={20} />
        <label htmlFor={id} className="sr-only">
          Search movies
        </label>
        <input
          type="search"
          name="q"
          id={id}
          required
          autoComplete="off"
          placeholder='Try "Interstellar"...'
          className="w-full rounded-full border border-white/12 bg-slate-800 py-3 ps-10 pe-4 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </form>
    </section>
  );
}
