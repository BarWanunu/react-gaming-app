import axios from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "646816adbf504a69a1a5955c2939717c",
  },
});
