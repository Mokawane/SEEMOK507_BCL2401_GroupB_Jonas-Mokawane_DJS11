import React, { useState} from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const [sortOption, setSortOption] = useState("a-z");
  return (
    <div className="site-wrapper">
      <Header sortOption={sortOption} setSortOption={setSortOption} />
      <main>
      <Outlet context={{ sortOption }} />
      </main>
      <Footer />
    </div>
  );
}
