import React from "react";
import { Movie } from "@/utils/types/type";
import Image from "next/image";
import { baseUrl } from "@/constant/movie";

interface Props {
  // kalo gunakana firebase
  // movie: Movie || documentData[];
  movie: Movie;
}
const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 md:h-36 md:min-w-[260px] md hover:scale-105 hover:opacity-90">
      <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path || movie?.poster_path}`} alt={movie?.title} layout="fill" className="rounded-sm object-cover md:rounded" />
    </div>
  );
};

export default Thumbnail;
