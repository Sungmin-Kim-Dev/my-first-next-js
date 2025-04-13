import {Suspense} from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParameters {
  params: {id: string};
}

export async function generateMetadata({params: {id}}: IParameters) {
  return {
    title: "",
  };
}

const MovieDetail = async ({params: {id}}: IParameters) => {
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
