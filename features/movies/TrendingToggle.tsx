"use client";

import { useRouter } from "next/navigation";

type Props = {
  active: "day" | "week";
};

export default function TrendingToggle({ active }: Props) {
  const router = useRouter();

  return (
    <div className="flex w-fit rounded-full bg-slate-800 p-1">
      <button
        onClick={() => router.push(`/?window=day`)}
        className={`rounded-full px-4 py-1 text-sm font-medium transition cursor-pointer ${active === "day" ? "bg-accent" : "hover:text-white/70"}`}
      >
        Today
      </button>
      <button
        onClick={() => router.push(`/?window=week`)}
        className={`rounded-full px-4 py-1 text-sm font-medium transition cursor-pointer ${active === "week" ? "bg-accent" : "hover:text-white/70"}`}
      >
        This Week
      </button>
    </div>
  );
}
