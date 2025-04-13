"use client";

import {useEffect, useState} from "react";

// export const metadata = {
//   title: "Home",
// };

const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Hello, Next.js!</h1>
      {isLoading ? <h2>Loading...</h2> : `${JSON.stringify(movies)}`}
    </div>
  );
};

export default page;
