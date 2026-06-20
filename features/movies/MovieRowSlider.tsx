"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import MovieCard from "./MovieCard";
import type { MovieSummary } from "@/lib/tmdb/schemas";

type Props = {
  movies: MovieSummary[];
};

export default function MovieRowSlider({ movies }: Props) {
  return (
    <Swiper
      slidesPerView="auto"
      grabCursor
      className="select-none"
      modules={[FreeMode]}
      freeMode={{ enabled: true, momentumRatio: 0.5 }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id} className="w-44 pe-4 last:w-40 last:pe-0">
          <MovieCard movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
