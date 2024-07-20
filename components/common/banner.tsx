"use client";

import React, { useState, useEffect } from "react";
import { Movie } from "../../types";

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
    <div className="relative">
      {/* Banner Image */}
      <div className="relative">
        {movie && <img className="w-full h-[400px] object-cover" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.name} />}
        {/* Optional: Add some overlay or text */}
        {movie && (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black text-white p-4">
            <h1 className="text-3xl font-bold">{movie.name}</h1>
            <p className="mt-2">{movie.overview}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
