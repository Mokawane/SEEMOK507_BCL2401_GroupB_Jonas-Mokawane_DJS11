import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function SeriesDetail() {
  const { id } = useParams();
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {seasons.length > 0 ? (
        seasons.map((season) => (
          <Link to={`/series/${id}/episodes`} key={season.id}>
            <div className="season-detail">
              {season.image && <img src={season.image} alt={season.title} />}
              <h2>{season.title}</h2>
            </div>
          </Link>
        ))
      ) : (
        <div>No seasons available.</div>
      )}
    </div>
  );
}
