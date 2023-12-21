// Movies.js
import React from "react";
import MovieList from "./MovieList"; // Import your MovieList component here
import LoadingIndicator from "../LoadingIndicator";
import Pagination from "../Pagination";

const Movies = ({
  inputText,
  page,
  fetchMovies,
  movies,
  totalResults,
  loading,
}) => {
  return (
    <div>
      <MovieList movies={movies} />
      {loading && (
        <LoadingIndicator/>
      )}
      {totalResults > 10 && (
        <Pagination
          page={page}
          totalResults={totalResults}
          onPrevButtonClick={fetchMovies}
          onNextButtonClick={fetchMovies}
        />
      )}
    </div>
  );
};

export default Movies;
