import { useState } from 'react';
import axios from 'axios';

interface Movie {
  title: string;
  overview: string;
}

const MovieRecommendationForm = () => {
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const [error, setError] = useState('');

  const getRecommendations = async () => {
    try {
      const token = localStorage.getItem('token'); // 🔑 Get token from localStorage

      if (!token) {
        setError('Please log in to get recommendations.');
        return;
      }

      const response = await axios.post(
        'http://localhost:5000/api/recommend',
        { query },
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Pass token in Authorization header
          },
        }
      );

      setRecommendations(response.data);
      setError('');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error fetching recommendations.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getRecommendations();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Movie Recommendations 🎬</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your movie preferences..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: '8px', width: '60%' }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '8px 20px' }}>
          Get Recommendations
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul style={{ textAlign: 'left', marginTop: '20px', width: '60%', marginLeft: 'auto', marginRight: 'auto' }}>
        {recommendations.map((movie, index) => (
          <li key={index}>
            <strong>{movie.title}:</strong> {movie.overview}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieRecommendationForm;
