import {Suspense} from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import {API_URL} from "../../../../components/API_URL";

type IParams = Promise<{
  id: string;
}>;

export async function generateMetadata(props: {params: IParams}) {
  const params = await props.params;
  const id = params.id;
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  const movie = json;
  return {
    title: movie.title,
  };
}

const MovieDetail = async (props: {params: IParams}) => {
  const params = await props.params;
  const id = params.id;
  return (
    <>
      <Suspense fallback={<h1>Loading Movie Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
};

export default MovieDetail;
