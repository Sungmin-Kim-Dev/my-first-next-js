import { API_URL } from "../../components/API_URL";
import MovieCard from "../../components/movie-card";
import styles from "../../style/home.module.css";

export const metadata = {
  title: "Home",
};


async function getMovies() {
  console.log("fetching...");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // return fetch(URL).then((response) => response.json());
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

const Homepage = async () => {
  const movies = await getMovies();
  return (
    <div>
      <ul className={styles.container}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
