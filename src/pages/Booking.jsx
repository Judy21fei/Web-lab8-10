import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data/movies";
import CinemaHall from "../components/CinemaHall";
import "./Booking.css";
const Booking = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = movies.find((movie) => movie.id === parseInt(id));
    setMovie(selectedMovie);
  }, [id]);

  if (!movie) {
    return <div>Завантаження...</div>;
  }

  return (
    <div className="booking">
      <h1>Бронювання для {movie.title}</h1>
      <CinemaHall movieId={movie.id} />
    </div>
  );
};

export default Booking;
