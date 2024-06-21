import React from "react";
import { Link, NavLink } from "react-router-dom";
import Filter from "../Filter";
import SortIcon from "./sortIcon.jsx";

export default function Header({ sortOption, setSortOption }) {
    return (
        <header>
            <Link className="site-logo" to="/">
            Podcast_App
            </Link>
            <SortIcon sortOption={sortOption} setSortOption={setSortOption} />
            <nav>
                <NavLink to="/series">
                    Series
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
            </nav>
        </header>
    )
}