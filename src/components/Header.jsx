import React from "react";
import { Link, NavLink } from "react-router-dom";
import Filter from "../Filter";
import genresmapping from "../genresMapping";
import Search from "./Search";

export default function Header({ sortOption, setSortOption, genre, setGenre, onSearch }) {
    return (
        <header>
            <Link className="site-logo" to="/">
                Podcast_App
            </Link>
            <div className="header-controls">
                <Filter sortOption={sortOption} setSortOption={setSortOption} />
                <genresmapping genre={genre} setGenre={setGenre} />
                <Search onSearch={onSearch} />
            </div>
            <nav>
                <NavLink to="/series">Series</NavLink>
            </nav>
        </header>
    );
}
