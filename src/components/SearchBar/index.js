import React from "react";
import "./style.css";

function SearchBar() {
  return (
    <div>
      <input
        type="input"
        placeholder="Filter by Name"
        className="search"
      ></input>
    </div>
  );
}

export default SearchBar;
