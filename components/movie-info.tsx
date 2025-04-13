import {API_URL} from "../app/(home)/page";

async function getMovie(id) {
  console.log(`Fetching movies: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

const MovieInfo = async ({id}: {id: string}) => {
  const movieDetail = await getMovie(id);
  return <div>{JSON.stringify(movieDetail)}</div>;
};

export default MovieInfo;
