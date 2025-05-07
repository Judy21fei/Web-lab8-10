// Зберігає бронювання для конкретного фільму
export const saveBooking = (movieId, booking) => {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || {};

  // Якщо немає бронювань для цього фільму, створюємо новий масив
  if (!bookings[movieId]) {
    bookings[movieId] = [];
  }

  // Додаємо нове бронювання
  bookings[movieId].push({ ...booking, date: new Date() });

  // Зберігаємо всі бронювання назад у localStorage
  localStorage.setItem("bookings", JSON.stringify(bookings));
};

// Отримуємо заброньовані місця для конкретного фільму
export const getBookings = (movieId) => {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || {};

  // Повертаємо заброньовані місця тільки для поточного фільму
  return bookings[movieId] ? bookings[movieId] : [];
};
