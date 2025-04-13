import {API_URL} from "../app/(home)/page";

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("something's wrong")
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}

const VideoPlayer = ({videoKey}: {videoKey: string}) => {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoKey}?si=XKzsuM4MSazdtEL3`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen></iframe>
  );
};

const MovieVideos = async ({id}: {id: string}) => {
  const relatedVideos = await getVideos(id);
  return (
    <div>
      {relatedVideos.length > 0 && <VideoPlayer key={relatedVideos[0].key} videoKey={relatedVideos[0].key} />}
      {relatedVideos.length > 1 && <VideoPlayer key={relatedVideos[1].key} videoKey={relatedVideos[1].key} />}
    </div>
  );
};

export default MovieVideos;
