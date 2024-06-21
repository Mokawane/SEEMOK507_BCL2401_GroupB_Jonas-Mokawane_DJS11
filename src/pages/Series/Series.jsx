import React from "react";
import { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { sortItems } from "../../utils/sorting";

export default function Series() {
  const [series, setSeries] = useState([]);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const { sortOption } = useOutletContext();

  useEffect(() => {
    fetch("https://podcast-api.netlify.app")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setSeries(data))
      .catch((error) => setError(error));
  }, []);

  const showMoreSeries = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  const sortedSeries = sortItems(series, sortOption);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="series-container">
      <h1>Series List</h1>
      <div className="series-cards">
        {sortedSeries.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="series-card">
            <Link to={`/series/${item.id}`} key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="card-content">
              </div>
            </Link>
            <h2>{item.title}</h2>
            <h4>seasons : {item.seasons}</h4>
            <h4>Release Date: {item.updated}</h4>
          </div>
        ))}
      </div>
      {
        visibleCount < series.length && (
          <button onClick={showMoreSeries}>Show More</button>
        )
      }
    </div >
  );
}
