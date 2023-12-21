// Body.js
import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import Movies from "./Movies";

const Body = () => {
  // State variables
  const [inputText, setInputText] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API key
  const API_KEY = "b9518d7a";

  // Fetch movies function
  const fetchMovies = async () => {
    try {
      const url = `https://www.omdbapi.com/?&apikey=${API_KEY}&s=${inputText}&page=${page}`;
      setLoading(true);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const results = data.Search || [];
      setTotalResults(data.totalResults);

      // Update the state with the new movies and totalResults
      setMovies(results);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again later!");
    } finally {
      setLoading(false);
    }
  };

  // UseEffect to fetch movies on inputText or page change
  useEffect(() => {
    if (inputText.trim() !== "") {
      fetchMovies();
    }
  }, [inputText, page]);

  // Handle the previous button click
  const handlePrevButtonClick = () => {
    setPage((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));
  };
  
  // Handle the next button click
  const handleNextButtonClick = () => {
    setPage((prevPage) =>
    prevPage * 10 >= totalResults ? prevPage : prevPage + 1
    );

  };
console.log(error);
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center px-5 py-2 lg:px-auto lg:pt-12">
      <SearchBox onSearch={(text) => setInputText(text)} />
      <Movies
        inputText={inputText}
        page={page}
        fetchMovies={fetchMovies}
        movies={movies}
        totalResults={totalResults}
        loading={loading}
        onPrevButtonClick={handlePrevButtonClick}
        onNextButtonClick={handleNextButtonClick}
      />
    </div>
  );
};

export default Body;
