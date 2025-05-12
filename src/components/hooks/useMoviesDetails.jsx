import { useState, useEffect } from 'react';

export const useMoviesDetails = (endpoint, data) => {
  const [moviesDetails, setMoviesDetails] = useState([]);

  useEffect(() => {
    if (endpoint === "movies" && Array.isArray(data)) {
      Promise.all(
        data.map((movieName) =>
          fetch(
            `https://owen-wilson-wow-api.onrender.com/wows/random?movie=${encodeURIComponent(movieName)}`
          )
            .then((res) => res.json())
            .then((responseData) => responseData[0])
            .catch((err) => {
              console.error(`Error fetching details for "${movieName}":`, err);
              return null;
            })
        )
      ).then((details) => {
        setMoviesDetails(details.filter((item) => item !== null));
      });
    }
  }, [endpoint, data]);

  return moviesDetails;
};
