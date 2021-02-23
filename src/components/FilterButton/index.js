import React from "react";
import "./style.css";

function FilterButton({ clear }) {
  return (
    <button type="button" onClick={clear} className="filter-button">
      Clear
    </button>
  );
}

export default FilterButton;
