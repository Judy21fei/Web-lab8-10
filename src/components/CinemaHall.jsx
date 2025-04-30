import { useState } from "react";

function CinemaHall() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const seats = Array.from({ length: 40 }, (_, i) => i + 1);

  return (
    <div>
      <div className="cinema-hall">
        {seats.map((seat) => (
          <div
            key={seat}
            className={`seat ${
              selectedSeats.includes(seat) ? "selected" : "available"
            }`}
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </div>
        ))}
      </div>
      <p>Selected Seats: {selectedSeats.join(", ") || "None"}</p>
    </div>
  );
}

export default CinemaHall;
