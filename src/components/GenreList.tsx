import useData from "../hooks/useData";
import useGenres from "../hooks/useGenres";

export interface Genre {
  id: number;
  name: string;
}

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
