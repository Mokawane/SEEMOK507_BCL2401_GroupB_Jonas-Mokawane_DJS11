import { useState, useEffect } from "react";
import { useParams, Link, useOutletContext } from "react-router-dom";
import { sortItems } from "../../utils/sorting";

export default function SeriesDetail() {
  const { id } = useParams();
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const { sortOption } = useOutletContext();

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSeasons(data.seasons);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const showMoreSeasons = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  const sortedSeasons = sortItems(seasons, sortOption);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="series-detail-container">
      {sortedSeasons.length > 0 ? (
        sortedSeasons.slice(0, visibleCount).map((season) => (
          <Link to={`/series/${id}/episodes`} key={season.id} className="season-card-link">
            <div className="season-card">
              {season.image && <img src={season.image} alt={season.title} className="season-image"  />}
              <h2 className="season-title">{season.title}</h2>
            </div>
          </Link>
        ))
      ) : (
        <div>No seasons available.</div>
      )}
            {visibleCount < seasons.length && (
        <button onClick={showMoreSeasons}>Show More</button>
      )}
    </div>
  );
}
