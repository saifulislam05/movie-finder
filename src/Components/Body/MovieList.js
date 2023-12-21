import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div
      id="movies_wrapper"
      className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-4"
    >
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
