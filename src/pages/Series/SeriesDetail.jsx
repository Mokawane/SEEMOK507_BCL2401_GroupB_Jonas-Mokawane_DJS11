import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SeriesDetail() {
  const { id } = useParams();
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Log the entire response to debug
        setSeasons(data.seasons); // Adjust this based on the actual data structure
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
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
        seasons.map((season, index) => (
          <div key={index} className="season-detail">
            {<season className="image"></season> && <img src={season.image} alt={season.title} />}
            <h2>{season.title}</h2>
          </div>
        ))
      ) : (
        <div>No seasons available.</div>
      )}
    </div>
  );
}
