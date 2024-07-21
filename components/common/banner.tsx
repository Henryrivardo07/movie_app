"use client";

import React, { useState, useEffect } from "react";
import { Movie } from "../../types";
import { baseUrl } from "@/constant/movie";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";

export type BannerProps = {
  netflixOriginals: Movie[];
};

const Banner: React.FC<BannerProps> = ({ netflixOriginals }) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (netflixOriginals && netflixOriginals.length > 0) {
      // Pilih film secara acak dari daftar netflixOriginals
      setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
    }
  }, [netflixOriginals]); // Jalankan efek ini setiap kali netflixOriginals berubah

  console.log(movie);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12  ">
      {/* Banner Image */}
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">{movie && <Image src={`${baseUrl}${movie.backdrop_path}`} alt={movie.name} layout="fill" objectFit="cover" priority />}</div>

      {/* Banner Text and Buttons */}

      <div className=" ">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">{movie?.title || movie?.name || movie?.original_name}</h1>
        <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>

        <div className="flex space-x-3 mt-4 md:mt-6 lg:mt-8">
          <button className="bannerButton bg-white text-black">
            <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
          </button>
          <button className="bannerButton bg-[gray]/70">
            <HiInformationCircle className="h-5 w-5 md:h-8 md:w-8" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
