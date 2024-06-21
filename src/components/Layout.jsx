import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const [sortOption, setSortOption] = useState("a-z");
  const [genre, setGenre] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    setSearchResults([]);
  };

  return (
    <div className="site-wrapper">
      <Header
        sortOption={sortOption}
        setSortOption={setSortOption}
        genre={genre}
        setGenre={setGenre}
        onSearch={handleSearch}
      />
      <main>
        <Outlet context={{ sortOption, genre, searchResults }} />
      </main>
      <Footer />
    </div>
  );
}
