import { Movie } from "@/utils/types/type";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Thumbnail from "./thumbnail";

interface Props {
  title: string;
  movies: Movie[];
}

const Row = ({ title, movies }: Props) => {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 text-sm text-[#e5e5e5] font-semi-bold md:text-2xl p-4 cursor-pointer transition duration-200 hover:text-white  ">{title}</h2>
      <div className="group relative md:-ml-2">
        <FaChevronLeft className="absolute top-0 left-2 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />

        <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2 ">
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <FaChevronRight className="absolute top-0 right-2 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125  group-hover:opacity-100" />
      </div>
    </div>
  );
};

export default Row;
