import { useParams } from "react-router-dom";
import { movies } from "../data/movies";
import CinemaHall from "../components/CinemaHall";

function Booking() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div>
      <h1>Booking for {movie.title}</h1>
      <CinemaHall />
    </div>
  );
}

export default Booking;
