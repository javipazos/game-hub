import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { apiClient, FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const aDayInMS = 60 * 60 * 24 * 1000;
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms")
        .then((res) => res.data.results),
    staleTime: aDayInMS,
  });

export default usePlatforms;
