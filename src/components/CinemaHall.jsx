import React, { useState } from "react";
import "./CinemaHall.css";
const CinemaHall = ({ movieId }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seat)) {
        return prevSelectedSeats.filter((s) => s !== seat);
      } else {
        return [...prevSelectedSeats, seat];
      }
    });
  };

  const totalSeats = 20;

  return (
    <div className="cinema-hall">
      <h2>Кінозал для фільму {movieId}</h2>
      <div className="seats-grid">
        {Array.from({ length: totalSeats }, (_, index) => {
          const seat = index + 1;
          return (
            <div
              key={seat}
              className={`seat ${
                selectedSeats.includes(seat) ? "selected" : "available"
              }`}
              onClick={() => toggleSeat(seat)}
            >
              {seat}
            </div>
          );
        })}
      </div>
      <div>
        <h3>Вибрані місця: {selectedSeats.join(", ")}</h3>
      </div>
    </div>
  );
};

export default CinemaHall;
