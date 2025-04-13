import styles from "../style/movie-videos.module.css";
import {API_URL} from "./API_URL";

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("something's wrong")
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}

const MovieVideos = async ({id}: {id: string}) => {
  const relatedVideos = await getVideos(id);
  return (
    <div className={styles.container}>
      {relatedVideos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
};

export default MovieVideos;
