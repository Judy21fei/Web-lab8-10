import React, { useState } from "react";
import { movies } from "../data/movies"; 
import MovieCard from "../components/MovieCard"; 
import "./Home.css";
const Home = () => {
  const [query, setQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (!searchQuery) {
      setFilteredMovies(movies); // Якщо немає запиту, показуємо всі фільми
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  return (
    <div className="home">
      <h1>Виберіть фільм</h1>

      {/* Поле пошуку */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Пошук фільмів..."
          value={query}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {/* Відображення фільмів */}
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
