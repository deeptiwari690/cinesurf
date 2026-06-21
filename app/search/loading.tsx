export default function SearchLoading() {
  return (
    <main className="flex flex-col gap-6">
      <div className="h-8 w-64 rounded bg-slate-800 animate-pulse" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="aspect-2/3 rounded-lg bg-slate-800 animate-pulse" />
            <div className="h-4 w-3/4 rounded bg-slate-800 animate-pulse" />
            <div className="h-3 w-1/2 rounded bg-slate-800 animate-pulse" />
          </div>
        ))}
      </div>
    </main>
  );
}
