import { useEffect, useState } from "react";
import { getAllBookings, deleteBooking } from "../services/BookingService";

export default function AdminPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getAllBookings().then(setBookings);
  }, []);

  const handleDelete = async (id) => {
    await deleteBooking(id);
    setBookings(bookings.filter((b) => b.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Усі бронювання</h2>
      {bookings.map((b) => (
        <div key={b.id} className="border p-3 mb-2">
          <p>Фільм ID: {b.movieId}</p>
          <p>Місця: {b.seats.join(", ")}</p>
          <p>
            Ім’я: {b.name}, Телефон: {b.phone}, Email: {b.email}
          </p>
          <button
            onClick={() => handleDelete(b.id)}
            className="bg-red-500 text-white px-2 py-1 mt-2 rounded"
          >
            Видалити
          </button>
        </div>
      ))}
    </div>
  );
}
