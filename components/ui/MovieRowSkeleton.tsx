export default function MovieRowSkeleton() {
  return (
    <section>
      <div className="h-7 w-48 rounded bg-slate-800 animate-pulse mbe-4" />
      <div className="flex gap-4 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-44 shrink-0">
            <div className="aspect-2/3 rounded-lg bg-slate-800 animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  );
}
