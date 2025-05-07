import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookingService } from "../services/BookingService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Booking.css";

const Booking = () => {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const booked = BookingService.getBookedSeats(id);
    setBookedSeats(booked);
  }, [id]);

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ім’я обов’язкове";
    if (!formData.phone.trim()) newErrors.phone = "Телефон обов’язковий";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Невірний формат емейлу";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      toast.error("Виберіть місця!");
      return;
    }
    if (!validate()) return;

    BookingService.saveBooking(id, selectedSeats, formData);
    toast.success("Бронювання успішне!");
    setSelectedSeats([]);
    setFormData({ name: "", phone: "", email: "" });
    setBookedSeats(BookingService.getBookedSeats(id));
  };

  const renderSeats = () => {
    const seats = [];
    for (let i = 1; i <= 30; i++) {
      const isBooked = bookedSeats.includes(i);
      const isSelected = selectedSeats.includes(i);
      seats.push(
        <div
          key={i}
          className={`seat ${
            isBooked ? "booked" : isSelected ? "selected" : ""
          }`}
          onClick={() => handleSeatClick(i)}
        >
          {i}
        </div>
      );
    }
    return seats;
  };

  return (
    <div className="booking-container">
      <h2>Бронювання місць</h2>
      <div className="seats-container">{renderSeats()}</div>
      <div className="form-container">
        <input
          type="text"
          placeholder="Ім’я"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <span className="error">{errors.name}</span>}
        <input
          type="text"
          placeholder="Телефон"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <button onClick={handleBooking}>Забронювати</button>
      </div>
    </div>
  );
};

export default Booking;
