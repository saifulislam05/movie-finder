import React, { useState } from "react";
import ModalData from "../Modal/ModalData";

const MovieCard = ({ movie }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const { Poster, Title, Year, imdbID } = movie;

  // API key
  const API_KEY = "b9518d7a";

  async function fetchMovieDetails() {
    try {
      const url = `https://www.omdbapi.com/?&apikey=${API_KEY}&i=${imdbID}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMovieDetails(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div
        className="movieCard w-52 h-full"
        onClick={() => {
          fetchMovieDetails();
          setIsActive(true);
        }}
      >
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
        {isActive && movieDetails && (
          <dialog
            className="modal bg-[#6868683d]"
            open={isActive}
            onClick={() => setIsActive(false)}
          >
            <div className="modal-box w-11/12 max-w-5xl">
              <div className="flex justify-center mt-10">
                <div
                  id="modalData"
                  className="rounded-md bg-gray-800 shadow-xl"
                >
                  <ModalData data={movieDetails} />
                </div>
              </div>
              <div className="modal-action w-fit mx-auto">
                <form method="dialog">
                  <button
                    className="btn btn-lg"
                    onClick={() => setIsActive(false)}
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </>
  );
};

export default MovieCard;
