export default function MovieLoading() {
  return (
    <main className="flex flex-col gap-6">
      <div className="relative h-96 rounded-lg bg-slate-800 animate-pulse" />
      <div className="flex flex-col gap-3">
        <div className="h-8 w-96 rounded bg-slate-800 animate-pulse" />
        <div className="h-4 w-64 rounded bg-slate-800 animate-pulse" />
        <div className="h-4 w-48 rounded bg-slate-800 animate-pulse" />
        <div className="h-24 w-full rounded bg-slate-800 animate-pulse" />
      </div>
    </main>
  );
}
