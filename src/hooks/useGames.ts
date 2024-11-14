import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGenres = (selectedGenre: Genre | null) => {
  return useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id } },
    selectedGenre ? [selectedGenre.id] : []
  );
};

export default useGenres;
