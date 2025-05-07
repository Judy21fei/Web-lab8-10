import React, { useState, useEffect } from "react";
import { movies } from "../data/movies";

const AdminPage = () => {
  const [movieBookings, setMovieBookings] = useState({});
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  // Завантажуємо всі бронювання з localStorage
  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || {};
    setMovieBookings(bookings);
  }, []);

  // Функція для обробки вибору фільму
  const handleMovieSelection = (movieId) => {
    setSelectedMovieId(movieId);
  };

  // Отримуємо бронювання для вибраного фільму
  const selectedMovie = movies.find((movie) => movie.id === selectedMovieId);
  const bookingsForMovie = movieBookings[selectedMovieId] || [];

  return (
    <div>
      <h1>Адмін панель</h1>

      <div>
        <h2>Виберіть фільм:</h2>
        <select onChange={(e) => handleMovieSelection(Number(e.target.value))}>
          <option value="">-- Оберіть фільм --</option>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>
      </div>

      {selectedMovieId && (
        <div>
          <h3>{selectedMovie?.title}</h3>

          {bookingsForMovie.length === 0 ? (
            <p>Бронювань ще немає для цього фільму.</p>
          ) : (
            <div>
              {bookingsForMovie.map((booking, index) => (
                <div key={index}>
                  <h4>{booking.name}</h4>
                  <p>Телефон: {booking.phone}</p>
                  <p>Email: {booking.email}</p>
                  <p>Місця: {booking.seats.join(", ")}</p>
                  <hr />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
