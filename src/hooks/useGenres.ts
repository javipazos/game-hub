import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const aDayInMS = 60 * 60 * 24 * 1000;
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
    staleTime: aDayInMS,
    initialData: genres,
  });

export default useGenres;
