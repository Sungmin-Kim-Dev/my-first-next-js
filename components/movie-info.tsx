import styles from "../style/movie-info.module.css";
import {API_URL} from "./API_URL";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

const MovieInfo = async ({id}: {id: string}) => {
  const movieDetail = await getMovie(id);

  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movieDetail.poster_path} alt={movieDetail.title} />
      <div className={styles.info}>
        <h2 className={styles.title}>{movieDetail.title}</h2>
        <h3>⭐️{movieDetail.vote_average.toFixed(1)}</h3>
        <p>{movieDetail.overview}</p>
        {movieDetail.homepage && (
          <a href={movieDetail.homepage} target="_blank">
            Official Website &rarr;
          </a>
        )}
      </div>
    </div>
  );
};

export default MovieInfo;
