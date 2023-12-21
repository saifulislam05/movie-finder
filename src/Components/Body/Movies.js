
import React from "react";
import MovieList from "./MovieList"; 
import LoadingIndicator from "../LoadingIndicator";
import Pagination from "../Pagination";

const Movies = ({
  inputText,
  page,
  fetchMovies,
  movies,
  totalResults,
  loading,
  onPrevButtonClick,
  onNextButtonClick
}) => {
  return (
    <div>
      <MovieList movies={movies} />
      {loading && <LoadingIndicator />}
      {totalResults > 10 && (
        <Pagination
          page={page}
          totalResults={totalResults}
          onPrevButtonClick={onPrevButtonClick}
          onNextButtonClick={onNextButtonClick}
        />
      )}
    </div>
  );
};

export default Movies;
