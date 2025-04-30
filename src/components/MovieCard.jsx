// src/components/MovieCard.jsx
import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <h2 className="movie-title">{movie.title}</h2>
      <p className="movie-description">{movie.description}</p>
      <p className="movie-genre">Genre: {movie.genre}</p>
      <p className="movie-session">Session: {movie.sessionDate}</p>
    </div>
  );
};

export default MovieCard;
