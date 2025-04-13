import {API_URL} from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}
async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}

const MovieDetail = async ({params}: {params: {id: string}}) => {
  const {id} = await params;
  console.log("start fetching");
  const [movieDetail, relatedVideos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("end fetching");
  return (
    <>
      <h2>{movieDetail.title}</h2>
      <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${relatedVideos[0].key}?si=XKzsuM4MSazdtEL3`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
    </>
  );
};

export default MovieDetail;
