"use client";

import Link from "next/link";
import styles from "../style/movieCard.module.css";
import {useRouter} from "next/navigation";

interface IMovieCardProps {
  poster_path: string;
  title: string;
  id: number;
}

const MovieCard = ({poster_path, title, id}: IMovieCardProps) => {
  const router = useRouter();
  const onClick = async () => {
    router.push(`/movies/${id}`);
  };
  return (
    <li className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  );
};

export default MovieCard;
