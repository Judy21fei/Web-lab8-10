const BASE_URL = "http://localhost:3001";

export const getBookingsByMovieId = async (movieId) => {
  const res = await fetch(`${BASE_URL}/bookings?movieId=${movieId}`);
  return res.json();
};

export const createBooking = async (booking) => {
  const res = await fetch(`${BASE_URL}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
  });
  return res.json();
};

export const deleteBooking = async (id) => {
  await fetch(`${BASE_URL}/bookings/${id}`, { method: "DELETE" });
};

export const updateBooking = async (id, updatedBooking) => {
  const res = await fetch(`${BASE_URL}/bookings/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedBooking),
  });
  return res.json();
};

export const getAllBookings = async () => {
  const res = await fetch(`${BASE_URL}/bookings`);
  return res.json();
};
