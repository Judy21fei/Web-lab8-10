import { useState } from "react";
import { movies } from "../data/movies";
import MovieList from "../components/MovieList";

function Home() {
  const [query, setQuery] = useState("");
  const filtered = movies.filter((m) =>
    m.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Now Showing</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <MovieList movies={filtered} />
    </div>
  );
}

export default Home;
