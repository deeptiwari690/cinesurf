import Image from "next/image";
import Link from "next/link";
import { ImageOff } from "lucide-react";
import { getImageUrl } from "@/lib/tmdb/imageUrl";
import { formatDate } from "@/lib/tmdb/formatDate";
import type { MovieSummary } from "@/lib/tmdb/schemas";

type Props = {
  movie: MovieSummary;
};

export default function MovieCard({ movie }: Props) {
  const { id, title, poster_path, release_date } = movie;

  return (
    <article>
      <Link href={`/movie/${id}`} prefetch={false}>
        {poster_path ? (
          <Image src={getImageUrl(poster_path, "w342")} alt={title} width={342} height={513} className="rounded-lg" />
        ) : (
          <div className="flex aspect-2/3 items-center justify-center rounded-lg bg-slate-700">
            <ImageOff className="text-slate-400" />
          </div>
        )}
      </Link>
      <div className="select-text cursor-text">
        <h3 className="mbs-2 line-clamp-2 font-bold">{title}</h3>
        <p className="mbs-1 text-sm text-slate-400">{formatDate(release_date)}</p>
      </div>
    </article>
  );
}
