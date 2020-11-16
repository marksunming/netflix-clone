import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, islargeRow }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }

    fetchData();

    // if [], run once when the row loads, and don't run again;
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* several row__poster */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${islargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${
              islargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* container => posters */}
    </div>
  );
}

export default Row;
