
import React from "react";
import MovieList from "./MovieList"; 
import LoadingIndicator from "../LoadingIndicator";
import Pagination from "../Pagination";

const Movies = ({
  page,
  movies,
  totalResults,
  loading,
  onPrevButtonClick,
  onNextButtonClick
}) => {
  return (
    <div>
      {movies.length > 0 ?<p className="text-green-500">To see movie Details click on any movie!</p>:<></>
}
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
