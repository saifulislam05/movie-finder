import React from "react";

const MovieCard = ({ movie }) => {
  console.log(movie);
  const { Poster, Title, Year, imdbID } = movie;
  return (
    <div className="movieCard w-52 h-full" id={imdbID}>
      <div className="card bg-base-100 h-full shadow-xl cursor-pointer hover:scale-95 transition duration-500 flex flex-col justify-between">
        <figure className="h-[70%]">
          <img className="min-h-full" src={Poster} alt={Title} />
        </figure>
        <div className="card-body mt-4">
          <h2 className="card-title w-fit mx-auto text-base text-center font-semibold">
            {Title}
          </h2>
          <h2 className="text-xs mt-2 text-center">
            Released on <span className="font-bold">{Year}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
