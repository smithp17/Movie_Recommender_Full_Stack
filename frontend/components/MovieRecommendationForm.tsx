import { useState } from 'react';
import { getRecommendations } from '../services/api';

interface Movie {
  title: string;
  overview: string;
}

const MovieRecommendationForm = () => {
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState<Movie[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await getRecommendations(query);
    setRecommendations(data);
  };

  return (
    <div>
      <h2>Movie Recommendations 🎬</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your movie preferences..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button type="submit">Get Recommendations</button>
      </form>

      {recommendations.length > 0 && (
        <ul>
          {recommendations.map((movie, index) => (
            <li key={index}>
              <strong>{movie.title}</strong>: {movie.overview}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieRecommendationForm;
