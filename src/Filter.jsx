import React from "react";

export default function Filter({ sortOption, setSortOption }) {
  return (
    <div className="filter-container">
      <label htmlFor="sort">Sort by: </label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="newest">Newest-Oldest</option>
        <option value="oldest">Oldest-Newest</option>
      </select>
    </div>
  );
}
