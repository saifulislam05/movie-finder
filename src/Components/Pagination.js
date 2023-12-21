import React from "react";

const Pagination = ({
  page,
  totalResults,
  onPrevButtonClick,
  onNextButtonClick,
}) => {
  return (
    <div>
      <div className="join grid grid-cols-2 w-fit mx-auto mt-8">
        <button
          className="join-item btn btn-outline"
          onClick={() => onPrevButtonClick(page - 1)}
          disabled={page === 1}
        >
          Previous page
        </button>
        <button
          className="join-item btn btn-outline"
          onClick={() => onNextButtonClick(page + 1)}
          disabled={page * 10 >= totalResults}
        >
          Next page
        </button>
      </div>
    </div>
  );
};

export default Pagination;
