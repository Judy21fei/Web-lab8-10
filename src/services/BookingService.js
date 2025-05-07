const BOOKINGS_KEY = "movieBookings";

export const BookingService = {
  saveBooking(movieId, seats, userData) {
    const bookings = JSON.parse(localStorage.getItem(BOOKINGS_KEY)) || {};
    bookings[movieId] = bookings[movieId] || [];
    bookings[movieId].push({ seats, userData });
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  },

  getBookedSeats(movieId) {
    const bookings = JSON.parse(localStorage.getItem(BOOKINGS_KEY)) || {};
    const movieBookings = bookings[movieId] || [];
    return movieBookings.flatMap((b) => b.seats);
  },
};
