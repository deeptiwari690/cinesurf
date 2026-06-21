import Image from "next/image";
import Link from "next/link";
import { TmdbError } from "@/lib/tmdb/tmdb";
import { ZodError } from "zod";

type ErrorConfig = {
  illustration: string;
  code: string;
  title: string;
  desc: string;
};

const configs: Record<string, ErrorConfig> = {
  notFound: {
    illustration: "/illustrations/error-404.svg",
    code: "404",
    title: "Page not found",
    desc: "The page you're looking for doesn't exist or has been moved.",
  },
  server: {
    illustration: "/illustrations/error-500.svg",
    code: "500",
    title: "Something went wrong",
    desc: "Our server ran into an unexpected problem. Try again in a moment.",
  },
  network: {
    illustration: "/illustrations/error-network.svg",
    code: "Network error",
    title: "No connection",
    desc: "Looks like you're offline. Check your internet connection and try again.",
  },
  rateLimit: {
    illustration: "/illustrations/error-429.svg",
    code: "429",
    title: "Too many requests",
    desc: "Please wait a moment and try again.",
  },
  unknown: {
    illustration: "/illustrations/error-500.svg",
    code: "Error",
    title: "Something went wrong",
    desc: "An unexpected error occurred. Please try again.",
  },
};

function getErrorConfig(error: unknown): ErrorConfig {
  if (error instanceof TypeError) return configs.network;
  if (error instanceof ZodError) return configs.unknown;
  if (error instanceof TmdbError) {
    if (error.status === 404) return configs.notFound;
    if (error.status === 429) return configs.rateLimit;
    if (error.status >= 500) return configs.server;
  }
  return configs.unknown;
}

type Props = {
  error: unknown;
  reset?: () => void;
};

export default function ErrorView({ error, reset }: Props) {
  const { illustration, code, title, desc } = getErrorConfig(error);

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-24 text-center">
      <Image src={illustration} alt="" width={680} height={300} className="w-80 h-auto" />
      <div className="flex flex-col gap-3 max-w-sm">
        <span className="text-xs font-medium tracking-widest uppercase text-slate-500">{code}</span>
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className="text-slate-400 leading-relaxed">{desc}</p>
      </div>
      <div className="flex gap-3">
        {reset && (
          <button
            onClick={reset}
            className="rounded-md bg-accent px-5 py-2 text-sm font-medium cursor-pointer transition hover:brightness-110"
          >
            Try again
          </button>
        )}
        <Link
          href="/"
          className="rounded-md border border-white/20 px-5 py-2 text-sm text-slate-400 cursor-pointer transition hover:text-white"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
