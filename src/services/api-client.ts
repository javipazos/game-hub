import axios from "axios";
import { Genre } from "../hooks/useGenres";

export const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "71f7934ad2f44e2d8059b0f536c3538d",
  },
});

export const getGenres = async (): Promise<Genre[]> => {
  const response = await apiClient.get<FetchResponse<Genre>>("/genres");
  return response.data.results;
};
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
