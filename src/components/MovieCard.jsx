import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p> Genre: {movie.genre}</p>
      <p> Time: {movie.time}</p>
      <Link to={`/booking/${movie.id}`}>
        <button className="book-now-btn">Забронювати</button>
      </Link>
    </div>
  );
};

export default MovieCard;
