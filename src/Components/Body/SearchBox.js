// SearchBox.js
import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchButtonClick = () => {
    onSearch(searchText);
  };

  return (
    <div className="search-box flex items-center justify-center gap-5 mb-6">
      <input
        type="text"
        placeholder="Search here"
        value={searchText}
        onChange={handleSearchInput}
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <button onClick={handleSearchButtonClick} className="btn btn-primary">
        Search
      </button>
    </div>
  );
};

export default SearchBox;
